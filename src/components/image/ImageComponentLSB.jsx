import React, {useEffect, useState} from 'react';

import styles from "../../styles/AudioPage.module.css";
import UploadFile from "./uploadFile/UploadFile";
import TextField from "../textField/TextField";
import {Button} from "@mui/material";
import { baseUrl } from "../../config/config";
const fileTypes = ["JPEG", "PNG","JPG"];
const ImageComponentLSB = () => {


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

        setInputData({
            message: "",
        });
        setFile(null);
        setFileDecode(null);
        setTimeout(() => {
        }, 0);
    }, [resp,respDecode]);
    return (
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
                    text={"Enter secret message"}
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
                <TextField
                    text={"Press 'Decrypt' to see message"}
                    name="message"
                    readOnly={true}
                    //  onChange={onUpdateFieldDecode}
                    value={respDecode}
                />

                <div
                    style={{
                        display: "flex",
                        //  paddingTop:"2rem",

                        flexDirection: "column",
                        justifyContent: "center",
                        minWidth: "238px",
                        maxWidth: "544px",
                    }}
                >
                    <Button onClick={handleSubmitDecode} variant="contained">
                        Decrypt
                    </Button>


                    {/*{respDecode ? <span>{respDecode}</span> : <></>}*/}
                </div>
            </div>
        </div>
    );
};

export default ImageComponentLSB;