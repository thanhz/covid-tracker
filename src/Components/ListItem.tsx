import * as React from "react";
import type { Total } from "../Types";

function numberWithCommas(x: Number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TotalItem = (props: Total) => (
  <div className='TotalItem'>
    <h3>Confirmed Cases:</h3>
    <h4>{numberWithCommas(props.confirmed)}</h4>
    <h3>Critical Cases:</h3>
    <h4>{numberWithCommas(props.critical)}</h4>
    <h3>Deaths:</h3>
    <h4>{numberWithCommas(props.deaths)}</h4>
    <h3>Last Changed:</h3>
    <h4>{props.lastChange}</h4>
    <h3>Last Updated:</h3>
    <h4>{props.lastUpdate}</h4>
    <h3>Recovered:</h3>
    <h4>{numberWithCommas(props.recovered)}</h4>
  </div>
);

export default TotalItem;
