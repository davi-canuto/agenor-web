import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./css/PortfolioDisplay.module.css";

const PortfolioDisplay = ({ portfolio }) => {
  return (
    <div className={styles.wrapper}>
      <Header portfolioName={portfolio?.firstName} />

      <div className={styles.container}>
        <p>Hello! I am</p>
        <p>
          {portfolio?.firstName} {portfolio?.lastName}
        </p>
        <p>I am a {portfolio?.occupation}</p>
      </div>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default PortfolioDisplay;
