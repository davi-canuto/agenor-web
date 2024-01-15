import React from "react";
import styles from "./css/Header.module.css";

const Header = ({ portfolioName }) => {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>
        Display.js - {portfolioName} Portfolio
      </p>
    </header>
  );
};

export default Header;
