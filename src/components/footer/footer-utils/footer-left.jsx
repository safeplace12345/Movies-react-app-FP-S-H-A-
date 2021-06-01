import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterLeft = ({}) => {
  return (
    <div className="footer-left col-md-4 col-sm-6">
      <p className="about">
        <span> About the company</span> Go-Movies , Inc. operates as a streaming
        entertainment service company. The firm provides subscription service
        streaming movies and television episodes over the Internet and sending
        DVDs by mail. It operates through the following segments: Domestic
        Streaming, International Streaming and Domestic DVD.
      </p>
      <div className="icons">
        <a href="www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="http://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="http://www.google.com">
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
      </div>
    </div>
  );
};

export default FooterLeft;
