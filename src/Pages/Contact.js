import React from "react";
import contactBanner from "../assets/contactbanner.jpg";
import "../styles/Contact.css";

const Contact = () => {

  return (
    <div className="contact">
      <div
        data-aos="fade-right"
        className="form-image"
        style={{ backgroundImage: `url(${contactBanner})` }}
      ></div>
      <form className="contact-form">
        <h1 data-aos="fade-right" className="contact-title">Contact Us</h1>
        <div data-aos="fade-right" className="inputs">
          <input  type="text" placeholder="Enter Your First Name" />
          <input  type="text" placeholder="Enter Your Last Name" />
          <input  type="email" placeholder="Enter Your Email" />
          <textarea  placeholder="Enter Your Message"></textarea>
          <button id="form-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
