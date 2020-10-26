import * as React from "react";
import type { TotalArr } from "../Types";
import TotalItem from "./ListItem";

const ListTotal = ({ data }: TotalArr) => (
  <div className="ListTotal">
    {data.map((item, index) => (
        <TotalItem
          key={index}
          confirmed={item.confirmed}
          critical={item.critical}
          deaths={item.deaths}
          lastChange={item.lastChange}
          lastUpdate={item.lastUpdate}
          recovered={item.recovered}
        />
    ))}
  </div>
);

export default ListTotal;
