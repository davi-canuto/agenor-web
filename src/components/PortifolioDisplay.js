import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import styles from "./css/PortfolioDisplay.module.css";

const PortfolioDisplay = ({ portfolio }) => {
  return (
    <div>
      <Header portfolioName={portfolio?.firstName} />

      <main>
        <div>
          <h1>{portfolio?._id}</h1>
          <p>{portfolio?.firstName}</p>
          <p>{portfolio?.lastName}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDisplay;
