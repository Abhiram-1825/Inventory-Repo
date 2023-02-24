import React from "react";
import styles from "./Charts.module.css";
import Chart from "./Chart";

const Charts = (props) => {
    const chartMetrics = ["stock", "mrp", "rate"];
    const chartDataList = [];
    for (const metric of chartMetrics) {
        const dataRecord = props.data.map((record) => {
            return {
                name: record.name,
                [metric]: record[metric],
            };
        });
        chartDataList.push(dataRecord);
    }
    return (
        <>
            <h2>Charts</h2>
            <div className={styles.chart}>
                {chartDataList.map((data , idx) => (
                    <Chart
                        data={data}
                        dataKey={Object.keys(data[0])[1]}
                        key={idx}
                    />
                ))}
            </div>
        </>
    );
};

export default Charts;
