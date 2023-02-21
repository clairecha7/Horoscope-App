import React from "react";
import "./Main.scss";
import Card from "../Card/Card";
import { data } from "../../helpers/data";

function Main() {
  const cards = data.map((sign) => <Card sign={sign} key={sign.date} />);

  return <div className="main">{cards}</div>;
}

export default Main;
