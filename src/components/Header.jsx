import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faEarthEurope} className="logo" />
      <h1 className="logo--title">my travel journal</h1>
    </header>
  );
}
