import "./styles/global.css";
import Box from "./components/Box";
import { Component } from "react";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      water: 1.5,
      heart: 120,
      temp: -10,
      steps: 3000,
    };
  }

  onStepsChange = (e) => {
    this.setState({ steps: e.target.value }, this.calculateWater);
  };

  onHeartChange = (e) => {
    this.setState({ heart: e.target.value }, this.calculateWater);
  };

  onTempChange = (e) => {
    this.setState({ temp: e.target.value }, this.calculateWater);
  };

  calculateWater = () => {
    let water = 1.5;

    water += Math.max(0, this.state.temp - 20) * 0.02;
    water += Math.max(0, this.state.heart - 120) * 0.0008;
    water += Math.max(0, this.state.steps - 10000) * 0.00002;

    this.setState({ water });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3a85ff"
            value={this.state.water.toFixed(2)}
            unit="L"
            hideSlider
          />

          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            value={this.state.steps}
            onChange={this.onStepsChange}
          />

          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            unit="bpm"
            min={heartMin}
            max={heartMax}
            value={this.state.heart}
            onChange={this.onHeartChange}
          />

          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            unit="°C"
            min={tempMin}
            max={tempMax}
            value={this.state.temp}
            onChange={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
