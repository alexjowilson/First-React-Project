import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // gets numbers out of object array and convert it to array of numbers
    const totalMax = Math.max(...dataPointValues); // pull out elements out of number array with the ... spread operator


    return(
        <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMax} 
            label={dataPoint.label}/>)
        } 
        </div>
    );
};

export default Chart;