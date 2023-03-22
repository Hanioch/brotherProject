import "./style.scss";
import "./animation.scss";
import { useState } from "react";
import { Elem } from "./ElemInList";

export const ListImage = ({ images, setImages }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteImage = (toDelete) => {
    const newArr = [];

    images.forEach((image) => {
      if (image.id !== toDelete) {
        newArr.push(image);
      }
    });

    setImages(newArr);
  };

  return (
    <ul className="list-image-preview">
      {images.map((image, index) => {
        const { id, file } = image;
        return (
          <Elem
            key={file.name + index}
            image={file}
            index={index}
            deleteImage={deleteImage}
            id={id}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
          />
        );
      })}
    </ul>
  );
};
