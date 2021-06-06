import React from "react";

import FooterLeft from "./footer-utils/footer-left";
import FooterRight from "./footer-utils/footer-right";
import FooterCenter from "./footer-utils/footer-center";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
     <FooterLeft/>
     <FooterCenter/>
     <FooterRight/> 
      
    </footer>
  );
};

export default Footer;
