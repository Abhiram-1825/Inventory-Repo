import React, { useState } from "react";
import styles from "./TableRowData.module.css";

const TableRowData = (props) => {
    const [selectedBatchData, setSelectedBatchData] = useState(props.data);
    const [selectedValue , setSelectedValue] = useState(props.data.batches[0]);
    const optionsList = props.data.batches.map((batch, index) => {
        return (
            <option
                value={props.data.batches[index]}
                key={index}
            >
                {props.data.batches[index]}
            </option>
        );
    });
    const optionChangeHandler = (event) => {
        setSelectedBatchData(props.data[event.target.value]);
        setSelectedValue(event.target.value)
    };

    return (
        <tr>
            <td>{selectedBatchData.name}</td>
            <td>
                {props.data.batches.length === 1 ? (
                    selectedBatchData.batches[0]
                ) : (
                    <select
                        className={styles.batches}
                        id="batches"
                        onChange={optionChangeHandler}
                        value={selectedValue}
                    >
                        {optionsList}
                    </select>
                )}
            </td>
            <td>{selectedBatchData.stock}</td>
            <td>{selectedBatchData.deal}</td>
            <td>{selectedBatchData.free}</td>
            <td>{selectedBatchData.mrp}</td>
            <td>{selectedBatchData.rate}</td>
            <td>{selectedBatchData.exp}</td>
            <td>{selectedBatchData.company}</td>
        </tr>
    );
};

export default TableRowData;
