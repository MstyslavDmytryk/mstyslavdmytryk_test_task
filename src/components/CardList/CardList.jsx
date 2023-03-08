import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
  return (
    <section className="cards">
      <ul className="card-list">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} name={card.name} species={card.species} />
        ))}
      </ul>
    </section>
  );
};

export default CardList;
