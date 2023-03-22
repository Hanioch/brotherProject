import "./styles.scss";
import Dropzone from "react-dropzone";

function DragNdrop({ saveImage, isAlreadyImage }) {
  return (
    <Dropzone onDrop={saveImage}>
      {({ getRootProps, getInputProps }) => (
        <section className="content-drag-drop">
          <div className="drag-drop" {...getRootProps()}>
            <input {...getInputProps()} />

            <div className="message-about-file"></div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default DragNdrop;
