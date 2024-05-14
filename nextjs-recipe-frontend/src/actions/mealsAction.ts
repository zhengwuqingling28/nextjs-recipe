"use server";

import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import xss from "xss";
import fs from "node:fs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const SubmitShareMealAction = async (formData) => {
  const title = formData.get("title");
  const slug = slugify(title);
  const image = formData.get("image");

  const extension = image.name.split(".").pop();
  const fileName = `/image/${slug}.${extension}`;

  //storage image to file system
  const stream = fs.createWriteStream(`public${fileName}`);
  const bufferedImage = await image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (e) => {
    if (e) {
      throw new Error("Saving image failed");
    }
  });

  const meal: IMeal = {
    id: uuidv4(),
    title: title,
    slug: slug,
    summary: formData.get("summary"),
    instructions: xss(formData.get("instructions")),
    image: fileName,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
  await fetch("http://localhost:8000/meals", {
    method: "POST",
    body: JSON.stringify(meal),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/meals");
  redirect("/meals");
};
