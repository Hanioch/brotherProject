import DragNdrop from "../Components/DragNdrop";
import { ListImage } from "../Components/ListImage";
import { uid } from "uid";
import "./style.scss";

const AddInformations = ({
  images,
  setImages,
  numImage,
  setNumImage,
  setSection,
}) => {
  const setListBeforeAdd = (files) => {
    const tempListImage = [...images];

    for (const file of files) {
      if (file.type === "image/jpeg") {
        const obj = { id: uid(), file };
        tempListImage.push(obj);
      }
    }

    setImages(tempListImage);
  };

  const checkBeforeSetNumImage = (e) => {
    const value = e.target.value;
    if (value <= 9000) {
      setNumImage(parseInt(value));
    } else {
      return;
    }
  };

  return (
    <>
      <h1 className="title-add-information">Modificateur d'image:</h1>
      <div className="content-input-label-number">
        <label>Entrez le numéro de l'image : </label>
        <input
          className="input-number-image"
          type="number"
          onChange={checkBeforeSetNumImage}
          value={numImage}
        />
      </div>

      {images.length > 0 ? (
        <div>
          <h3> Vous avez ajouter {images.length} images. </h3>
          <span className="text-delete-images" onClick={() => setImages([])}>
            Supprimer toutes les images.
          </span>
          <ListImage images={images} setImages={setImages} />
          <span className="text-before-drag-drop">ajouter d'autres images</span>
          <DragNdrop saveImage={setListBeforeAdd} isAlreadyImage={true} />
        </div>
      ) : (
        <>
          <span className="text-before-drag-drop">
            Faites glisser vos images
          </span>
          <DragNdrop saveImage={setListBeforeAdd} isAlreadyImage={false} />
        </>
      )}
      <footer>
        <button
          className="button-next-section"
          onClick={() => setSection(1)}
          disabled={images.length === 0}
        >
          Suivant
        </button>
      </footer>
    </>
  );
};

export default AddInformations;
