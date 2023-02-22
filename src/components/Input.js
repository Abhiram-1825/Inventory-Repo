import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    const onChangeHandler = (event) => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(event.target.files[0]);
        reader.onload = (e) => {
            props.onFileUpload(e.target.result);
        };
    };
    return (
        <div className={styles["file-input"]}>
            <label htmlFor="input">Enter the file</label>
            <input
                type="file"
                id="input"
                name="input"
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default Input;
