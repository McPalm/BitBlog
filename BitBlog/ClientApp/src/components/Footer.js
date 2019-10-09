import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="page-footer bit-footer py-3 px-5">
      <div className="bit-v-flex">
        <div>
          <a href="mailto:bit.assembly@gmail.com">
            <span role="img" aria-label="email">
              &#x1F4E7;
            </span>
            bit.assembly@gmail.com
          </a>
        </div>
        <div>
          <span>&copy; Bit Assembly 2019. Crafted with Contempt</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
