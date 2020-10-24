import React from "react";
import "./App.css";

type Data = {
  confirmed: number;
  critical: number;
  deaths: number;
  lastChange: String;
  lastUpdate: String;
  recovered: Number;
};

type MyState = {
  data: Data[];
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
    function numberWithCommas(x: Number) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
      <div className='App'>
        <h1>COVID-19 TRACKER</h1>
        {this.state.data.map((item) => {
          return (
            <ul>
              Confirmed
              <li>{numberWithCommas(item.confirmed)}</li>
              Critical
              <li>{numberWithCommas(item.critical)}</li>
              Deaths
              <li>{numberWithCommas(item.deaths)}</li>
              Recovered
              <li>{numberWithCommas(item.recovered)}</li>
              Last Changed
              <li>{item.lastChange}</li>
              Last Updated
              <li>{item.lastUpdate}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
