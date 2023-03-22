import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { uid } from "uid";

import "./style.scss";

const ImageModificator = ({ images, newNumImage, setNewNumImage }) => {
  const [indexImage, setIndexImage] = useState(0);
  const [elementToDownload, setElementToDownload] = useState([]);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const elementToScreen = useRef(null);

  useEffect(() => {
    saveInZip();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      saveInZip();
    }, 100);
  }, [indexImage]);

  useEffect(() => {
    console.log("hello toi ");
    if (elementToDownload.length === images.length && !isDownloaded) {
      handleDownload();
    }
  }, [elementToDownload]);

  const saveInZip = () => {
    console.log("hello ", indexImage);
    html2canvas(elementToScreen.current)
      .then((canvas) => {
        setElementToDownload([
          ...elementToDownload,
          {
            name: getImageName(),
            canvas: canvas.toDataURL("image/png"),
            id: uid(),
          },
        ]);
      })
      .then(() => {
        changeImage(1);
      });
  };

  const handleDownload = () => {
    const zip = new JSZip();

    elementToDownload.forEach((element, index) => {
      zip.file(`image-${index}.png`, element.canvas.split(",")[1], {
        base64: true,
      });
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      const link = document.createElement("a");
      link.download = "allFiles";
      link.href = URL.createObjectURL(blob);
      link.click();
    });

    setIsDownloaded(true);
  };

  const changeImage = (operator) => {
    if (indexImage !== images.length - 1) {
      setIndexImage(indexImage + operator);
      setNewNumImage(newNumImage + operator);
    }
  };

  const getImageName = () => images[indexImage].file.name.split(".")[0];

  return (
    <div className="image-modificator">
      <div className="content-to-screen-and-download">
        <div className="content-to-screen" ref={elementToScreen}>
          <div className="text-arround-image">
            <span className="elem-before-image">We are grapp.</span>
            <div className="elem-and-line elem-before-image">
              <hr className="elem-0 elem" />
              <span className="elem-1 elem"> {newNumImage} </span>
              <span className="elem-2 elem"> Le graaal </span>
            </div>
          </div>
          <div className="image-modificator-content">
            <div className="rec rectangle1"></div>
            <div className="rec rectangle2"></div>
            <div className="rec rectangle3"></div>
            <div className="rec rectangle4"></div>
            <img
              className="image-need-change"
              src={URL.createObjectURL(images[indexImage].file)}
              alt={`file preview ${getImageName()}`}
            />
          </div>
          <div className="text-arround-image elem-and-line">
            <hr className="elem-0 elem" />
            <span className="elem-1 elem">wearegrapp</span>
            <span className="elem-2 elem">@{getImageName()}</span>
          </div>
        </div>
        <ul className="list-download">
          <h3>Liste</h3>
          <span onClick={() => setElementToDownload([])}> Vider la liste </span>
          {elementToDownload &&
            elementToDownload.map(({ name, canvas, id }) => (
              <li className="elem-list-download" key={id}>
                {name}
              </li>
            ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default ImageModificator;
