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
import styles from './Charts.module.css';


const Charts = (props) => {
    const data = props.data;
    return (
        <div>
            {
                <BarChart width={500} height={300} data={data} className={styles.chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={props.dataKey} fill="#8884d8" />
                </BarChart>
            }
        </div>
    );
};

export default Charts;
