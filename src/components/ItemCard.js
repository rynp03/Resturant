import React from "react";
import "../styles/ItemCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ItemCard = ({ name, type, price, time, rating, image }) => {
  const recipeStyles = {
    fontSize: "18px",
    margin: "2px",
  };

  return (
    <div data-aos="fade-right" className="card">
      <div className="card-image">
        <img src={image} alt="card" className="card-img" />
      </div>
      <div className="card-content">
        <div className="card-recipe">
          <span>
            <AccessTimeIcon style={recipeStyles} /> {time}
          </span>
          <span>
            Max-upto: <CurrencyRupeeIcon style={recipeStyles} />
            {price}
          </span>
        </div>
        <div className="card-heading">
          <h2>{name}</h2>
        </div>
        <div className="card-description">
          <p>{`Types: ${type}`}</p>
        </div>
        <div className="card-rating">
          <span>{rating}</span>
        </div>
      </div>
      <div className="card-button">
        <button className="card-btn">Add</button>
      </div>
    </div>
  );
};

export default ItemCard;
