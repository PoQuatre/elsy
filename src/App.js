import "./App.css";
import Steps from "./components/Steps";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-primary">Hello !</h1>
      <div className="row">
        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepsMin}</p>
        <Steps />
      </div>
    </div>
  );
}

export default App;
