import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Go-Movies , Inc. operates as a
          streaming entertainment service company. The firm provides
          subscription service streaming movies and television episodes over the
          Internet and sending DVDs by mail. It operates through the following
          segments: Domestic Streaming, International Streaming and Domestic
          DVD.
        </p>
        <div className="icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="/components/signUp"> Go-movies@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Go-movies<span> logo</span>
        </h2>
        <div className="footer-nav d-flex flex-wrap justify-content-between">
          <a href="/"> Home</a>
          <a href="/components/construction"> About</a>
          <a href="/components/construction"> Services</a>
          <a href="/components/construction"> PortFolio</a>
          <a href="/components/construction">News</a>
          <a href="/components/construction">Contact</a>
        </div>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
    
  );
};

export default Footer;
