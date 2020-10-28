import * as React from "react";
import type { Total } from "../Types";

function numberWithCommas(x: Number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TotalItem = (props: Total) => (
  <div className='TotalItem'>
    <div className='total'>
      <h3>Confirmed Cases:</h3>
      <h4 className='TotalItem--grey'>{numberWithCommas(props.confirmed)}</h4>
      <h3>Critical Cases:</h3>
      <h4 className='TotalItem--orange'>{numberWithCommas(props.critical)}</h4>
      <h3>Deaths:</h3>
      <h4 className='TotalItem--red'>{numberWithCommas(props.deaths)}</h4>
      <h3>Recovered:</h3>
      <h4 className='TotalItem--green'>{numberWithCommas(props.recovered)}</h4>
    </div>
    <div className='lastUpdated'>
      <p>Last Changed:</p>
      <p>{props.lastChange}</p>
      <p>Last Updated:</p>
      <p>{props.lastUpdate}</p>
    </div>
  </div>
);

export default TotalItem;
