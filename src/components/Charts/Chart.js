import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import styles from "./Chart.module.css";

const Chart = (props) => {
    const data = props.data;
    return (
        <BarChart width={500} height={300} data={data} className={styles.chart}>
            <CartesianGrid strokeDasharray="3 1" />
            <XAxis dataKey="name" fontSize={10}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={props.dataKey} fill="#8884d8" />
        </BarChart>
    );
};

export default Chart;
