import React, { useState } from "react";
import ImageModificator from "../Components/ImageModificator";

const DataProcessing = ({ images, numImage, setSection }) => {
  const [newNumImage, setNewNumImage] = useState(numImage);

  return (
    <>
      <h1 className="title-add-information">Modificateur d'image:</h1>
      <br />
      <ImageModificator
        images={images}
        newNumImage={newNumImage}
        setNewNumImage={setNewNumImage}
      />
      <br />
      <footer>
        <button
          className="button-next-section"
          onClick={() => setSection(0)}
          disabled={images.length === 0}
        >
          Retour
        </button>
      </footer>
    </>
  );
};

export default DataProcessing;
