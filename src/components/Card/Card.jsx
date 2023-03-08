import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, species }) => {
  return (
    <li className="card">
      <Link to={`/character/${id}`}>
        <img src={image} alt="hero" />
        <div className="card-content">
          <div className="card__name" title={name}>
            {name}
          </div>
          <div className="card__race">{species}</div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
