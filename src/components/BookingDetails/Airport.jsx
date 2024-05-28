import React from "react";
import styles from "./BookingDetails.module.scss";

const Airport = ({
  dynamicBgColor = "#F5F7FA",
  img,
  title,
  terminalNo,
  terminalName,
}) => {
  return (
    <div className={styles.airport_details}>
      <div>
        <img src={img} alt="img" />
      </div>
      <div
        className={styles.airport_title}
        style={{ backgroundColor: dynamicBgColor }}
      >
        <h2>{title}</h2>
        <p>
          {terminalNo} <span>{terminalName}</span>
        </p>
      </div>
    </div>
  );
};

export default Airport;
