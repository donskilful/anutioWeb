import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Logo from "../../asset/icons/Logo.svg";

function Footer() {
  const isPhone = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <Link to="/">
          {" "}
          <img src={Logo} alt="logo" width={"50px"} />
        </Link>
        {isPhone ? null : <p>© Anutio2022. All rights reserved.</p>}
      </div>
      <div className="footer-quick-links">
        <ul>
          <h4>Quick Links</h4>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
        <ul>
          <h4>Products</h4>
          <a href="/">
            <li>Students</li>
          </a>
          <a href="/">
            {" "}
            <li>Schools</li>
          </a>
          <a href="/">
            {" "}
            <li>Business</li>
          </a>
          <a href="/">
            {" "}
            <li>Start Ups</li>
          </a>
        </ul>
      </div>
      <div className="footer-socials">
        <div className="footer-socials-wrapper">
          <a
            href="https://www.facebook.com/HelloAnutio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-fb-logo"
          >
            <Facebook className="footer-card-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC7Z9FapuIUdv1t7CFo42IiA"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-youtube-logo"
          >
            <YouTube className="footer-card-icon" />
          </a>
          <a
            href="https://twitter.com/HelloAnutio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-twitter-logo"
          >
            {" "}
            <Twitter className="footer-card-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/anutio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin-logo"
          >
            {" "}
            <LinkedIn className="footer-card-icon" />
          </a>
        </div>
        <div className="footer-policy">
          <a href="/">
            <p>Trems and condition</p>
          </a>
          <a href="/">
            <p>Privacy policy</p>
          </a>
        </div>
      </div>

      {isPhone ? <p>© Anutio2022. All rights reserved.</p> : null}
    </footer>
  );
}

export default Footer;
