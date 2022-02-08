import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ButtonGroup,
  FormFeedback,
} from "reactstrap";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import TooltipIcon from "./TooltipIcon";
class SIR extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPopulation: null,
      infectiousPopulation: null,
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
      betaHistory: [],
      gammaHistory: [],
      populationTextBox: null,
      infectedTextBox: null,
      simStarted: false,
      isPaused: true,
      outcome: "",
    };
  }

  initializeChart = async () => {
    await this.setState({
      simStarted: false,
      isPaused: true,
      totalPopulation: this.state.populationTextBox,
      infectiousPopulation: this.state.infectedTextBox,
      susceptiblePopulation: 0,
      recoveredPopulation: 0,
      day: 0,
      outcome: "",
    });

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
      Legend
    );

    this.initializeChart();
  };

  forwardStep = async () => {
    let susceptibleArray = this.state.susceptibleData;
    let infectedArray = this.state.infectedData;
    let recoveredArray = this.state.recoveredData;
    let dayArray = this.state.dayData;

    await this.setState({
      susceptiblePopulation: susceptibleArray.at(-1),
      infectiousPopulation: infectedArray.at(-1),
      recoveredPopulation: recoveredArray.at(-1),
      day: dayArray.at(-1),
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
    });

    await this.setState({
      susceptiblePopulation: this.state.susceptiblePopulation + this.state.dsdt,
      infectiousPopulation: this.state.infectiousPopulation + this.state.didt,
      recoveredPopulation: this.state.recoveredPopulation + this.state.drdt,
      day: this.state.day + 1,
    });

    if (this.state.infectiousPopulation > 0.01) {
      await this.setState({
        simStarted: true,
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
        betaHistory: [...this.state.betaHistory, this.state.beta],
        gammaHistory: [...this.state.gammaHistory, this.state.gamma],
      });
    } else {
      console.log("Infection Population is 0");
      this.state.isPaused = true;
      this.setState({
        outcome: `The infection ended after ${
          this.state.day
        } days. Out of the ${
          this.state.totalPopulation
        } total population ${Math.ceil(
          this.state.recoveredPopulation
        )} people were infected.`,
      });
    }
  };

  backStep = () => {
    if (this.state.day !== 0) {
      let susceptibleArray = this.state.susceptibleData;
      let infectedArray = this.state.infectedData;
      let recoveredArray = this.state.recoveredData;
      let dayArray = this.state.dayData;
      let betaHistory = this.state.betaHistory;
      let gammaHistory = this.state.gammaHistory;

      susceptibleArray.pop();
      infectedArray.pop();
      recoveredArray.pop();
      dayArray.pop();
      betaHistory.pop();
      gammaHistory.pop();

      this.setState({
        susceptibleData: susceptibleArray,
        infectedData: infectedArray,
        recoveredData: recoveredArray,
        dayData: dayArray,
        beta: betaHistory.at(-1),
        gamma: gammaHistory.at(-1),
      });
    }
  };

  setPopulation = async (population) => {
    await this.setState({ populationTextBox: population });
    this.initializeChart();
  };

  setInfected = async (population) => {
    await this.setState({ infectedTextBox: population });
    this.initializeChart();
  };

  startSim = () => {
    setTimeout(() => {
      this.forwardStep();
      if (
        this.state.infectiousPopulation > 0.01 &&
        this.state.isPaused === false
      ) {
        this.startSim();
      }
    }, 100);
  };

  render() {
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
        <Container>
          <Row>
            <Col className="col-8">
              <Line datasetIdKey="id" data={data} options={options} />
            </Col>
            <Col>
              <TooltipIcon />
              <Row>
                <ButtonGroup>
                  <Button
                    color="success"
                    onClick={async () => {
                      await this.setState({ isPaused: false });
                      this.startSim();
                    }}
                  >
                    Play <FontAwesomeIcon className="ml" icon={faPlay} />
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      this.setState({ isPaused: true });
                    }}
                  >
                    Pause <FontAwesomeIcon icon={faPause} />
                  </Button>
                  <Button onClick={this.initializeChart}>Reset</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button color="primary" onClick={this.backStep}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} /> Step Back
                  </Button>
                  <Button color="primary" onClick={this.forwardStep}>
                    Step Forward <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </Button>
                </ButtonGroup>
              </Row>
              <Form>
                <FormGroup>
                  <Label for="populationTextBox">Population</Label>
                  <Input
                    invalid={this.state.totalPopulation ? false : true}
                    id="populationTextBox"
                    placeholder="100"
                    type="number"
                    disabled={this.state.simStarted ? true : false}
                    onChange={(e) =>
                      this.setPopulation(parseInt(e.target.value))
                    }
                  ></Input>
                  <FormFeedback>
                    Please Enter a number greater than 0
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="infectedTextBox">Infected</Label>
                  <Input
                    invalid={this.state.infectiousPopulation ? false : true}
                    id="infectedTextBox"
                    placeholder="5"
                    type="number"
                    disabled={this.state.simStarted ? true : false}
                    onChange={(e) => {
                      this.setInfected(parseInt(e.target.value));
                    }}
                  ></Input>
                  <FormFeedback>
                    Please enter a number greater than 0 and less than the
                    population size
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="betaSlider">Beta ({this.state.beta})</Label>
                  <Input
                    id="betaSlider"
                    type="range"
                    max="1"
                    min="0.01"
                    step="0.01"
                    value={this.state.beta}
                    onChange={(e) => {
                      console.log(this.state.beta);
                      this.setState({ beta: e.target.value });
                    }}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="gammaSlider">Gamma ({this.state.gamma})</Label>
                  <Input
                    id="gammaSlider"
                    type="range"
                    max="1"
                    min="0.01"
                    step="0.01"
                    value={this.state.gamma}
                    onChange={(e) => {
                      console.log(this.state.gamma);
                      this.setState({ gamma: e.target.value });
                    }}
                  ></Input>
                </FormGroup>
              </Form>
              <h5>{this.state.outcome}</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SIR;
