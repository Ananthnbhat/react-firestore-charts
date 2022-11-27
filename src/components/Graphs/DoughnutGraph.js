import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Skeleton } from '@mui/material';

const DoughnutGraph = ({ labels, datasets }) => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = { labels, datasets }
    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
            },
        },
    };
    if (datasets !== undefined) {
        return <Doughnut data={data} options={options} />;
    } else {
        return <Skeleton width={300} height={300} />
    }

}
export default DoughnutGraph;