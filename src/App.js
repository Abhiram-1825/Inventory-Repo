import React, { useState } from "react";
import Input from "./components/Input";
import * as XLSX from "xlsx";
import styles from "./App.module.css";
import Table from "./components/Table";

const App = () => {
    const [inventoryData, setInventoryData] = useState("");
    const [searchText, setSearchText] = useState("");
    const fileUploadHanlder = (file) => {
        const workbook = XLSX.read(file, { type: "binary" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setInventoryData(jsonData);
    };
    return (
        <>
            <Input onFileUpload={fileUploadHanlder} />
            {!inventoryData && (
                <p className={styles.record}> No Records Found</p>
            )}
            {inventoryData && (
                <>
                    <div className={styles.header}>
                        <h2>Inventory Records</h2>
                        <input
                            type="search"
                            placeholder="Search by name..."
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                    </div>
                    <Table
                        inventoryRecords={inventoryData}
                        searchText={searchText}
                    />
                </>
            )}
        </>
    );
};

export default App;
