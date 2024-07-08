import React from "react";
import "./Navigation.scss";
import MenuItem from "./MenuItem";

const pages = ["Track", "Ship", "Services", "Support"];
const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        {pages.map((page) => (
          <>
            <MenuItem title={page} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;
