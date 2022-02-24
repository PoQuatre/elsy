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

    this.setState({
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-primary">Hello !</h1>
        <div className="row">
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3a85ff"
            value={1.5}
            unit="L"
            hideSlider
          />

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />

          {/* Heart */}
          <Box icon="favorite" color="red" value={120} unit="bpm" />

          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
