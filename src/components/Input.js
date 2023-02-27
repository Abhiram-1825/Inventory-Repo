import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    const onFileUpload = (event) => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(event.target.files[0]);
        reader.onload = (e) => {
            props.onFileUpload(e.target.result);
        };
    };
    return (
        <div className={styles["file-input"]}>
            <label htmlFor="input">Upload the file</label>
            <input
                type="file"
                id="input"
                name="input"
                onChange={onFileUpload}
            />
        </div>
    );
};

export default Input;
