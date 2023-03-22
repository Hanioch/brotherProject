import { useState } from "react";

export const Elem = ({
  index,
  image,
  deleteImage,
  id,
  isDeleting,
  setIsDeleting,
}) => {
  const [deletedClass, setDeletedClass] = useState("");

  const animationDeleted = () => {
    if (!isDeleting) {
      setIsDeleting(true);
      console.log(isDeleting);
      setDeletedClass("animation-deleted");

      setTimeout(() => {
        deleteImage(id);
        setIsDeleting(false);
      }, 1000);
    }
  };

  return (
    <li className={`elem-image-preview ${deletedClass}`}>
      <span className="cross" onClick={animationDeleted}>
        X
      </span>
      <img
        className="image-preview"
        src={URL.createObjectURL(image)}
        alt={`file preview ${index}`}
      />
    </li>
  );
};
