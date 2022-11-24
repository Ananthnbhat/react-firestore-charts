import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DoughnutGraph = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    return <Doughnut data={data} />;

}
export default DoughnutGraph;