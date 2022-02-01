import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let labels = ["Janurary", "Feb"];
let options = {
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

let data = {
  labels,
  datasets: [
    {
      label: "Susceptible",
      data: [],
      backgroundColor: ["rgba(30, 30, 255, 0.2)"],
      borderColor: ["rgba(30,30,255,0.5)"],
    },
    {
      label: "Infected",
      data: [],
      backgroundColor: ["rgba(255, 30, 30, 0.2)"],
      borderColor: ["rgba(255,30,30,0.5)"],
    },
    {
      label: "Recovered",
      data: [],
      backgroundColor: ["rgba(200,200,200,0.2)"],
    },
  ],
};

const SIR = () => {
  return <Line options={options} data={data} />;
};

export default SIR;
