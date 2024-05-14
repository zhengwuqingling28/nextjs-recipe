"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

interface IProps {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: IProps) => {
  const [pickImage, setPickImage] = useState();

  const imageInput = useRef();

  const handlePickClick = () => {
    if (imageInput && imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet</p>}
          {pickImage && (
            <Image src={pickImage} alt="The image selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpg, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
