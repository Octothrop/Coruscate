import styles from "./comp/style";
import React from "react";
import {
  Schedule,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
} from "./comp";
import "./home.css"
import "./comp/style"

const Enter = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Schedule />
          <CardDeal />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Enter;
