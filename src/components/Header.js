import React from "react";
import styles from "./css/Header.module.css";

const Header = ({ portfolioName }) => {
  const title = `Display.js - ${portfolioName} Portfolio`;
  return (
    <header className={styles.header}>
      <p>{title}</p>
    </header>
  );
};

export default Header;
