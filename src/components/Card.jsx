import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={props.imageUrl}
        alt={`Image of ${props.title}`}
      />
      <div className="card--info">
        <p className="location--details">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <span className="location">{props.location}</span>
          <a href={props.googleMapsUrl} className="location--url">
            View on Google Maps
          </a>
        </p>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--date">
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <time>{props.startDate}</time> - <time> {props.endDate} </time>
        </p>
        <p className="card--text">{props.description} </p>
      </div>
    </div>
  );
}
