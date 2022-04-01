import React from "react";
import "../styles/Home.css";
import Banner from "../assets/Banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${Banner})`,
  };

  return (
    <div data-aos="fade-right" className="home" style={backgroundStyles}>
      <div className="header-content">
        <h1 className="home-title">
          The Slice of Spice
        </h1>
        <p className="home-slogan">
          HASTY AND TASTY
        </p>
        <Link to="/menu">
          <button className="home-btn">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
