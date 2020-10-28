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
    const videoSource = "https://thv1.uloz.to/4/0/8/4080f50d6833b7a99279c7aa14fd3148.720.mp4?fs=VWsXYD8ZuOr0&fide=2zNcTwf&vt=1603839599&sg=sSoyE_LG-7Ltyyze6LeeyQ&bl=";
    return (
      <div className='App'>
        <video autoPlay loop muted id='myVideo'>
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
