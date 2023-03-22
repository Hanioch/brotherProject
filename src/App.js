import { useState } from "react";
import "./App.css";
import AddInformations from "./Section/AddInformations";
import DataProcessing from "./Section/DataProcessing";

function App() {
  const [images, setImages] = useState([]);
  const [numImage, setNumImage] = useState(0);
  const [section, setSection] = useState(0);

  return (
    <div className="app">
      {section === 0 ? (
        <AddInformations
          images={images}
          setImages={setImages}
          numImage={numImage}
          setNumImage={setNumImage}
          setSection={setSection}
        />
      ) : (
        <DataProcessing
          images={images}
          numImage={numImage}
          setNumImage={setNumImage}
          setSection={setSection}
        />
      )}
    </div>
  );
}

export default App;
