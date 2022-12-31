import React from "react";
import Card from "./Card";
import Data from "../assets/data";

export default function Main() {
  return (
    <div className="main">
      {Data.map((destination) => (
        <Card {...destination} />
      ))}
    </div>
  );
}
