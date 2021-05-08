import React from "react";
import "./static/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out These Projects We Are Currently Pursuing !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Project1 Descriptions"
              label="Optical"
              path="/optical"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Project2 Description"
              label="Radio"
              path="/radio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Project3 Description"
              label="Mystery"
              path="/recruitment"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Project4 Description"
              label="Adventure"
              path="/radio"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Project5 Description"
              label="Adrenaline"
              path="/optical"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
