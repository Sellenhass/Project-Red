import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className="header">
      <div class="twinkling">
        <div className="wrapper-header">
          <h1 className="home-heading">Sellenhass cosmonautics</h1>
          <span className="header-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            harum sapiente!
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
