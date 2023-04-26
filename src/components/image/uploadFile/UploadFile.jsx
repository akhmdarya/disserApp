import React from "react";
import { FileUploader } from "react-drag-drop-files";
import Subtitle from "../../texts/Subtitle";
import Text from "../../texts/Text";

const UploadFile = ({ fileTypes, file, handleChangeFile, title }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: " 15px",
        flexDirection: "column",
      }}
    >
      <div  style={{
        paddingTop:"1rem"
      }}>
        {" "}
        <Subtitle>Select or drop your cover {title}</Subtitle>
      </div>

      <FileUploader
        multiple={false}
        handleChange={handleChangeFile}
        name="file"
        types={fileTypes}
      />
      <span>
        {file ? (
          <Text>File name: ${file?.name}</Text>
        ) : (
          <Text>no files uploaded yet</Text>
        )}
      </span>

      <div style={{
          paddingTop:"1rem"
      }}>
        {" "}
        <Subtitle>Enter your secret message</Subtitle>
      </div>
    </div>
  );
};

export default UploadFile;