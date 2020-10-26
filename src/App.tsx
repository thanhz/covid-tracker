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
    return (
      <div className='App'>
        <h1>COVID-19 TRACKER</h1>
        <ListTotal data={this.state.data}/>
      </div>
    );
  }
}

export default App;
