import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DoughnutGraph = ({ labels, datasets }) => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = { labels, datasets }

    return <Doughnut data={data} />;

}
export default DoughnutGraph;