import React from "react";
const FooterCenter = ({}) => {
  return (
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
  );
};

export default FooterCenter;
