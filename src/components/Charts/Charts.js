import React from 'react';
import styles from './Charts.module.css';
import Chart from './Chart';

const Charts = (props) => {
    const stockRecords = props.data.map((record) => {
        return {
            name: record.name,
            stock: record.stock,
        };
    });
    const mrpRecords = props.data.map((record) => {
        return {
            name: record.name,
            mrp: record.mrp,
        };
    });
    const rateRecords = props.data.map((record) => {
        return {
            name: record.name,
            rate: record.rate,
        };
    });
  return (
      <React.Fragment>
          <h2>Chart</h2>
          <div className={styles.chart}>
              <Chart data={stockRecords} dataKey="stock" />
          </div>
          <div className={styles.chart}>
              <Chart data={mrpRecords} dataKey="mrp" />
          </div>
          <div className={styles.chart}>
              <Chart data={rateRecords} dataKey="rate" />
          </div>
      </React.Fragment>
  );
}

export default Charts;