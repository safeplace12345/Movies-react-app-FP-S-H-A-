import React from "react";
const FooterRight = () => {
  return (
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
  );
};

export default FooterRight;
