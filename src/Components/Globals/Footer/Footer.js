import React from "react";
import "./Footer.scss";
import pay from "../../../assets/Icons//pay.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={pay} />
      </div>
      <div className="address">
        <ul>
          <li>POST - IRAN</li>
          <li>POST address</li>
          <li>021-73652 - 021-88279345</li>
        </ul>
      </div>
      <div className="tools">
        <ul>
          <li>
            <h1>CUSTOMER TOOLS</h1>
          </li>
          <li>customer service</li>
          <li>special service</li>
          <li>tracking</li>
          <li>short message service</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
