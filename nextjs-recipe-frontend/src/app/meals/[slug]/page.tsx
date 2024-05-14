import Image from "next/image";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

const MealDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res = await fetch(`http://localhost:8000/meals?slug=${slug}`, {
    method: "GET",
  });

  const data = await res.json();
  const meal: IMeal = { ...data[0] };

  if (!meal) {
    notFound();
  }
  meal.instructions.replace("\r\n", "<br>");

  return (
    <div key={meal.id}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </div>
  );
};

export default MealDetail;
