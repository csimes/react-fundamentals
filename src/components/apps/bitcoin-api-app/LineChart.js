import React, { useState, useEffect } from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChart = (props) => {
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);

    useEffect(() => {
        const unsortedData = props.data;
        let dates = [];
        let payout = [];
        for (let item in unsortedData) {
            dates.push(item)
            payout.push(unsortedData[item]);
        }
        setDates(dates);
        setPayout(payout);
    },)
    
useEffect(() => {
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
        type: "line",
        data: {
            labels: ["first", "second", "third", "fourth"],

            datasets: [
                {
                    fill: "origin",
                    data: [1, 1, 5, 0],
                    tension: 1,
                    backgroundColor: "#d9514e80",
                    cubicInterpolationMode: "default",
                    borderColor: "#d9514e",
                    borderWidth: 2,
                },
            ],
        },
        options: {
            scales: {
                yAxis: [{ ticks: { beginAtZero: true } }],
            },
        },
    });
}, [])

    return (
        <canvas id="myChart"></canvas>
        )
};

export default LineChart;