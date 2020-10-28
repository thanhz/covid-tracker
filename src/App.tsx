import React from "react";
import "./App.css";
import ListTotal from "./Components/ListTotal";
import type { Total } from "./Types";

type MyState = {
  data: Total[];
};

class App extends React.Component<{}, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    data: [],
  };

  componentDidMount() {
    fetch("https://covid19-api.com/totals?format=json")
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const videoSource = "https://github.com/thanhz/covid-tracker/blob/master/src/Resources/background.mp4?raw=true#t=1";
    return (
      <div className='App'>
        <video autoPlay loop muted poster="./Resources/poster.jpg" id='myVideo'>
          <source src={videoSource} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='content'>
          <h1>COVID-19 TRACKER</h1>
          <ListTotal data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
