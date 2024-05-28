import React from "react";
import styles from "./BookingDetails.module.scss";

const AlertMsg = ({ alertText }) => {
  return (
    <div className={styles.alertMsg}>
      <div className={styles.icon}>
        <h6>!</h6>
      </div>
      <div className={styles.text}>
        <p>{alertText}</p>
      </div>
    </div>
  );
};

export default AlertMsg;
