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
class SIR extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPopulation: 100,
      infectiousPopulation: 5,
      susceptiblePopulation: totalPopulation - infectiousPopulation,
      recoveredPopulation: 0,
      day: 0,
      beta: 0.5,
      betaHistory: [beta],
      gamma: 0.5,
      gammaHistory: [gamma],
      rnot: beta / gamma,
      dsdt:
        (beta * infectiousPopulation * susceptiblePopulation) / totalPopulation,
      didt:
        (beta * infectiousPopulation * susceptiblePopulation) /
          totalPopulation -
        gamma * infectiousPopulation,
    };
  }

  componentDidMount = () => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  };

  render() {
    return <Line options={options} data={data} />;
  }
}

export default SIR;
