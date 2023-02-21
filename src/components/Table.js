import React, { useState, useEffect } from "react";
import TableRowData from "./TableRowData";
import styles from "./Table.module.css";
import Charts from "./Charts";
import Pagination from "./Pagination";

const Table = (props) => {
    const groupedData = {};
    for (const record of props.inventoryRecords) {
        // console.log(record);
        let batch = record.batch;
        let key = record.code;
        if (!groupedData.hasOwnProperty(key)) {
            groupedData[key] = {
                name: record.name,
                batches: [batch],
                stock: +record.stock,
                deal: +record.deal,
                free: +record.deal,
                mrp: record.mrp,
                rate: record.rate,
                exp: record.exp,
                company: record.company,
            };
        } else {
            const batchArray = groupedData[key].batches;
            if (!batchArray.includes(record.batch)) {
                if (!batchArray.includes("All")) {
                    batchArray.unshift("All");
                }
                batchArray.push(record.batch);
            }
            groupedData[key]["All"] = {
                name: groupedData[key].name,
                batches: batchArray,
                stock: groupedData[key].stock + record.stock,
                deal: Math.min(groupedData[key].deal, record.deal),
                free: Math.min(groupedData[key].free, record.free),
                mrp: Math.max(groupedData[key].mrp, record.mrp),
                rate: Math.max(groupedData[key].rate, record.rate),
                exp: groupedData[key].exp,
                company: groupedData[key].company,
            };
        }
        groupedData[key][batch] = { ...record };
    }
    const groupedDataArray = [];
    for (const groupRecord in groupedData) {
        groupedDataArray.push(groupedData[groupRecord]);
    }
    
    const [filteredData, setFilteredData] = useState(groupedDataArray);
    const [currentPage, setCurrentPage] = useState("1");
    const noOfRecordsPerPage = 20;

    const indexOfLastRecord = +currentPage * noOfRecordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - noOfRecordsPerPage;
    useEffect(() => {
        setFilteredData(
            groupedDataArray.filter((record) =>
                record.name.includes(props.inputText)
            )
        );
    }, [props.inputText]);
    const currentRecords = filteredData.slice(
        indexOfFirstRecord,
        indexOfLastRecord
    );
        

    console.log(filteredData, currentRecords);
    const nPages = Math.ceil(groupedDataArray.length / noOfRecordsPerPage);
    const setPageHandller = (pgNo) => {
        setCurrentPage(+pgNo);
    };

    const stockRecords = currentRecords.map((record) => {
        return {
            name: record.name,
            stock: record.stock,
        };
    });
    const mrpRecords = currentRecords.map((record) => {
        return {
            name: record.name,
            mrp: record.mrp,
        };
    });
    const rateRecords = currentRecords.map((record) => {
        return {
            name: record.name,
            rate: record.rate,
        };
    });
    return (
        <React.Fragment>
            <div className={styles["inventory-table"]}>
                <div className={styles.charts}>
                    <h2>Charts</h2>
                    <div className={styles.chart}>
                        <Charts data={stockRecords} dataKey="stock" />
                    </div>
                    <div className={styles.chart}>
                        <Charts data={mrpRecords} dataKey="mrp" />
                    </div>
                    <div className={styles.chart}>
                        <Charts data={rateRecords} dataKey="rate" />
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Batch</th>
                                <th>Stock</th>
                                <th>Deal</th>
                                <th>Free</th>
                                <th>MRP</th>
                                <th>Rate</th>
                                <th>Exp.</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((record) => {
                                return (
                                    <TableRowData
                                        key={Math.random().toString()}
                                        data={record}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.paginate}>
                <Pagination
                    noOfPages={nPages}
                    currPage={currentPage}
                    setCurrPage={setPageHandller}
                    className={styles["page-holder"]}
                />
            </div>
        </React.Fragment>
    );
};

export default Table;
