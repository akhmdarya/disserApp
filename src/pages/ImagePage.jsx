import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "../styles/AudioPage.module.css";
import UploadFile from "../components/image/uploadFile/UploadFile";
import TextField from "../components/textField/TextField";
import { Button } from "@mui/material";
import { baseUrl } from "../config/config";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ span: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const fileTypes = ["JPEG", "PNG","JPG"];

const ImagePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [file, setFile] = useState(null);

  const [fileDecode, setFileDecode] = useState(null);

  const [inputData, setInputData] = useState({
    message: "",

  });

  const handleChangeFile = (file) => {
    setFile(file);
    console.log(file);
    return file;
  };

  const handleChangeFileDecode = (fileDecode) => {
    setFileDecode(fileDecode);
    console.log(file);
    return fileDecode;
  };
  const onUpdateField = (e) => {
    const nextFormState = {
      ...inputData,
      [e.target.name]: e.target.value,
    };
    setInputData(nextFormState);
  };

  const [resp, setResp] = useState("");
  const [respDecode, setRespDecode] = useState("");

  const handleSubmit = (e) => {
  //  e.preventDefault();
    const formData = new FormData();

    formData.append("file_from_react", file);

    const UploadFile = async () => {
      await fetch(baseUrl + "/upload", {
        method: "POST",
        body: formData,
      }).then((resp) => {
        resp.json().then((data) => {
          setResp(data);
          console.log(data);
        });
      });
    };
    const UploadMessage = async () => {
      await fetch(baseUrl + "/uploadMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(inputData.message),
      }).then((resp) => {
        resp.json().then((data) => {
          setResp(data);
          console.log(data);
        });
      });
    };
    UploadFile();
    UploadMessage();
  };

  const handleSubmitDecode = (e) => {
  //  e.preventDefault();
    const formData = new FormData();

    formData.append("file_from_react_toDecode", fileDecode);

    const DecodeFile = async () => {
      await fetch(baseUrl + "/uploadDecode", {
        method: "POST",
        body: formData,
      }).then((resp) => {
        resp.json().then((data) => {
          setRespDecode(data);
          console.log(data);
        });
      });
    };

    DecodeFile();

  };


  useEffect(() => {
    setTimeout(() => {

    }, 1);
    setInputData({
      message: "",
    });
    setFile(null);
    setFileDecode(null);
  }, [resp,respDecode]);

  return (
    <div style={{ padding: "2rem 2rem", width: "60%" }}>
      <div className={styles.title}>
        <span> Image steganography</span>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="LSB" {...a11yProps(0)} />
          <Tab label="DCT" {...a11yProps(1)} />
          {/*<Tab label="Item Three" {...a11yProps(2)} />*/}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={styles.general_container}>
          <div className={styles.container}>
            <div className={styles.title}>
              <span> Encoding</span>
            </div>
            <UploadFile
              fileTypes={fileTypes}
              file={file}
              handleChangeFile={handleChangeFile}
            />
            <TextField
              name="message"
              onChange={onUpdateField}
              value={inputData.message}
            />
            <div
              style={{
                display: "flex",

                flexDirection: "column",
                justifyContent: "center",
                minWidth: "238px",
                maxWidth: "544px",
              }}
            >
              <Button onClick={handleSubmit} variant="contained">
                Encrypt
              </Button>
              {resp ? <span>{resp}</span> : <></>}
            </div>
          </div>

          {/*==================================================================================decode*/}




          <div className={styles.container}>
            <div className={styles.title}>
              <span> Decoding</span>
            </div>
            <UploadFile
                fileTypes={fileTypes}
                file={fileDecode}
                handleChangeFile={handleChangeFileDecode}
            />

            <div
                style={{
                  display: "flex",
                  paddingTop:"2rem",

                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: "238px",
                  maxWidth: "544px",
                }}
            >
              <Button onClick={handleSubmitDecode} variant="contained">
                Decrypt
              </Button>

              {/*<TextField*/}
              {/*    name="message"*/}
              {/*    onChange={onUpdateFieldDecode}*/}
              {/*    value={input.message}*/}
              {/*/>*/}
              {respDecode ? <span>{respDecode}</span> : <></>}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      {/*<TabPanel value={value} index={2}>*/}
      {/*    Item Three*/}
      {/*</TabPanel>*/}
    </div>
  );
};

export default ImagePage;
