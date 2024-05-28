import React from "react";
import styles from "./BookingDetails.module.scss";
import Airlines from "../../assets/Airlines.svg";
import Plane from "../../assets/Plane.svg";
import AlertMsg from "./AlertMsg";

const AirportHistory = ({
  isAlertMsg = true,
  title,
  duration,
  startTime,
  endTime,
  startDate,
  endDate,
  airlinesName,
  flightNo,
  airbus,
  classNo,
}) => {
  return (
    <div className={styles?.airport_history}>
      <div className={styles.logo}>
        <img src={Airlines} alt="img" />
      </div>
      <div className={styles.details}>
        <div className={styles.line}></div>
        <div className={styles.line_image}>
          <img src={Plane} alt="" />
        </div>
        <div className={styles.airport_history_time}>
          <div>
            <div>
              <h2>{title}</h2>
              <p>{duration}</p>
            </div>
            <div className={styles.airport_history_info}>
              <h5>{airlinesName}</h5>
              <p>Flight no : {flightNo}</p>
            </div>
          </div>
          <div>
            <div>
              <h2>{startTime}</h2>
              <p>{startDate}</p>
            </div>
            <div className={styles.airport_history_info}>
              <h6>{airbus}</h6>
              <p>
                Class : <span>{classNo}</span>
              </p>
            </div>
          </div>
          <div>
            <h2>{endTime}</h2>
            <p>{endDate}</p>
          </div>
        </div>
        {isAlertMsg && (
          <AlertMsg
            alertText="Technical stoppage at Malpensa International Airport (Milano). Before
          booking this flight please check your visa requirements as per your
          nationality"
          />
        )}
      </div>
    </div>
  );
};

export default AirportHistory;
