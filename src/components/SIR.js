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
import { Button } from "reactstrap";
import { Line } from "react-chartjs-2";

class SIR extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPopulation: 100,
      infectiousPopulation: 5,
      susceptiblePopulation: 0,
      recoveredPopulation: 0,
      day: 0,
      beta: 0.8,
      gamma: 0.5,
      rnot: 0,
      dsdt: 0,
      didt: 0,
      drdt: 0,
      dayData: [],
      susceptibleData: [],
      infectedData: [],
      recoveredData: [],
    };
  }

  initializeChart = async () => {
    await this.setState({
      susceptiblePopulation:
        this.state.totalPopulation - this.state.infectiousPopulation,
      rnot: this.state.beta / this.state.gamma,
    });

    await this.setState({
      dsdt:
        (-this.state.beta *
          this.state.infectiousPopulation *
          this.state.susceptiblePopulation) /
        this.state.totalPopulation,
    });

    await this.setState({
      didt:
        -this.state.dsdt - this.state.gamma * this.state.infectiousPopulation,
      drdt: this.state.gamma * this.state.infectiousPopulation,
      dayData: [this.state.day],
      susceptibleData: [this.state.susceptiblePopulation],
      infectedData: [this.state.infectiousPopulation],
      recoveredData: [this.state.recoveredPopulation],
    });
  };

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

    this.initializeChart();
  };

  forwardStep = async () => {
    await this.setState({
      dsdt:
        (-this.state.beta *
          this.state.infectiousPopulation *
          this.state.susceptiblePopulation) /
        this.state.totalPopulation,
    });

    await this.setState({
      didt:
        -this.state.dsdt - this.state.gamma * this.state.infectiousPopulation,
      drdt: this.state.gamma * this.state.infectiousPopulation,
    });

    await this.setState({
      susceptiblePopulation: this.state.susceptiblePopulation + this.state.dsdt,
      infectiousPopulation: this.state.infectiousPopulation + this.state.didt,
      recoveredPopulation: this.state.recoveredPopulation + this.state.drdt,
      day: this.state.day + 1,
    });

    if (this.state.infectiousPopulation > 0.01) {
      await this.setState({
        susceptibleData: [
          ...this.state.susceptibleData,
          this.state.susceptiblePopulation,
        ],
        infectedData: [
          ...this.state.infectedData,
          this.state.infectiousPopulation,
        ],
        recoveredData: [
          ...this.state.recoveredData,
          this.state.recoveredPopulation,
        ],
        dayData: [...this.state.dayData, this.state.day],
      });
    } else {
      console.log("Infection Population is 0");
    }
  };

  render() {
    console.log("===========");
    console.log(this.state.susceptiblePopulation);
    console.log(this.state.infectiousPopulation);
    console.log(this.state.recoveredPopulation);
    console.log("===========");

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
      labels: this.state.dayData,
      datasets: [
        {
          id: 1,
          label: "Susceptible",
          data: this.state.susceptibleData,
          backgroundColor: ["rgba(30, 30, 255, 0.2)"],
          borderColor: ["rgba(30,30,255,0.5)"],
        },
        {
          id: 2,
          label: "Infected",
          data: this.state.infectedData,
          backgroundColor: ["rgba(255, 30, 30, 0.2)"],
          borderColor: ["rgba(255,30,30,0.5)"],
        },
        {
          id: 3,
          label: "Recovered",
          data: this.state.recoveredData,
          backgroundColor: ["rgba(200,200,200,0.2)"],
        },
      ],
    };
    return (
      <div>
        <Button onClick={this.forwardStep}>Next Step</Button>
        <Line datasetIdKey="id" data={data} options={options} />
      </div>
    );
  }
}

export default SIR;
