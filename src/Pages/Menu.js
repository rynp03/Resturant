import React from "react";
import ItemCard from "../components/ItemCard";
import "../styles/Menu.css";
import MenuData from "../MenuData";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title" data-aos="fade-right">
        <h1>Menu</h1>
      </div>
      <div className="menu-list">
        {MenuData.map((card) => {
          return (
            <ItemCard
              key={card.id}
              name={card.name}
              type={card.types}
              price={card.price}
              time={card.time}
              rating={card.rating}
              image={card.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
