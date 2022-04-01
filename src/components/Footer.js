import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

const Footer = () => {
  const iconStyles = {
    fontSize: "50px",
    color: "#fff",
  };

  return (
    <div className="footer">
      <div className="social-icons">
        <InstagramIcon style={iconStyles} />
        <FacebookIcon style={iconStyles} />
        <LinkedInIcon style={iconStyles} />
        <TwitterIcon style={iconStyles} />
      </div>
      <div className="copyright-content">
        <h4>Copyright &copy; by Aryan Patel ❤️</h4>
      </div>
    </div>
  );
};

export default Footer;
