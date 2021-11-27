import Actions from "./Containers/index";
import "./App.css";
const labels2 = {
  santa: ["santa1", "santa2", "santa3"],

  snowflake: ["santa3", "santa1", "santa2"],

  things: ["santa2", "santa3", "santa1"],
};

function App() {
  return (
    <div className="app">
      <div className="app-bg">
        <img src="./bg.jpg" />
      </div>
      <Actions label={labels2}></Actions>
    </div>
  );
}

export default App;
