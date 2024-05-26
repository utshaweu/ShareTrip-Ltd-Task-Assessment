import React from "react";
import Location from "../../assets/Location.svg";
import styles from "./BookingDetails.module.scss";
import Airport from "./Airport";

const FlightDetails = () => {
  return (
    <div className={styles.flight_details}>
      <Airport
        img={Location}
        title="Departure from Dhaka"
        terminalNo="Terminal 1"
        terminalName="Hazrat Shahjalal International Airport"
      />
    </div>
  );
};

export default FlightDetails;
