import React from "react";
import "./CardInfo.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CardInfo = ({ cards }) => {
  const { id } = useParams();
  const character = cards.find((card) => card.id === parseInt(id));

  return (
    <>
      <Link to={"/"}>
        <div className="go_back_button">GO BACK</div>
      </Link>

      {character && (
        <section className="card-info">
          <div className="card-info__image">
            <img src={character.image} alt="hero" />
          </div>
          <h1 className="card-info__name">{character.name}</h1>
          <span className="card-info__informations">Informations</span>
          <div className="character-details">
            <div className="detail">
              <span className="label">Gender</span>
              <span className="value">{character.gender}</span>
            </div>
            <div className="detail">
              <span className="label">Status</span>
              <span className="value">{character.status}</span>
            </div>
            <div className="detail">
              <span className="label">Species</span>
              <span className="value">{character.species}</span>
            </div>
            <div className="detail">
              <span className="label">Origin</span>
              <span className="value">{character.origin.name}</span>
            </div>
            <div className="detail">
              <span className="label">Type</span>
              <span className="value">{character.type ? character.type : "Unknown"}</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardInfo;
