type Total = {
    confirmed: number;
    critical: number;
    deaths: number;
    lastChange: String;
    lastUpdate: String;
    recovered: Number;
  };
  
  type TotalArr = {
    data: Total[];
  };

  export type {Total, TotalArr }