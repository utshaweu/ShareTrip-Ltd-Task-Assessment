import React from "react";
import styles from "./BookingDetails.module.scss";
import Dot from "../../assets/Ellipse.svg";

const MasterFlightHistoryCard = () => {
  return (
    <div className={styles.master_flight_history_card}>
      <div className={styles.details_header}>
        <div className={styles.header_title}>
          <div> 
            <h2>1</h2>
          </div>
          <div>
            <h1>DAC → JFK</h1>
            <p>
              <span>Round Trip</span>
              <img src={Dot} alt="dot" />
              <span>25 Mar - 4 Apr 2023</span>
              <img src={Dot} alt="dot" />
              <span>1 Stop</span>
            </p>
          </div>
        </div>
        <p className={styles.duration}>33h 20m</p>
      </div>
    </div>
  );
};

export default MasterFlightHistoryCard;
