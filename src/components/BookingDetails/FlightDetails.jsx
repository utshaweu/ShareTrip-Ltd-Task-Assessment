import React from "react";
import Location from "../../assets/Location.svg";
import LocationColor from "../../assets/Location-color.svg";
import styles from "./BookingDetails.module.scss";
import Airport from "./Airport";
import AirportHistory from "./AirportHistory";

const FlightDetails = () => {
  return (
    <div className={styles.flight_details}>
      <Airport
        img={Location}
        title="Departure from Dhaka"
        terminalNo="Terminal 1:"
        terminalName="Hazrat Shahjalal International Airport"
      />
      <AirportHistory
        title="DAC - DXB"
        duration="12 hr 20 min"
        startTime="07:30 PM"
        endTime="08:50 AM"
        startDate="28 Mar, Friday"
        endDate="29 Mar, Saturday"
        airlinesName="Turkish Airlines"
        flightNo="TUR467"
        airbus="Airbus Industrie 737-800-738"
        classNo="ECONOMY-Y (O)"
      />
      <Airport
        dynamicBgColor="#E8F3FF"
        img={Location}
        title="Layover at Dubai: 12 hr 20 min "
        terminalNo=""
        terminalName="Dubai International Airport"
      />
      <AirportHistory
        isAlertMsg={false}
        title="DAC - DXB"
        duration="12 hr 20 min"
        startTime="07:30 PM"
        endTime="08:50 AM"
        startDate="28 Mar, Friday"
        endDate="29 Mar, Saturday"
        airlinesName="Turkish Airlines"
        flightNo="TUR467"
        airbus="Airbus Industrie 737-800-738"
        classNo="ECONOMY-Y (O)"
      />
      <Airport
        img={LocationColor}
        title="Destination at New York"
        terminalNo="Terminal 4:"
        terminalName="John F Kennedy International Airport"
      />
    </div>
  );
};

export default FlightDetails;
