import React from 'react'
import styles from './BookingDetails.module.scss';
import Breadcrumb from './Breadcrumb';
import MasterFlightHistoryCard from './MasterFlightHistoryCard';
import FlightDetails from './FlightDetails';

const BookingDetails = () => {
  return (
    <div className={styles.booking_details}>
      <Breadcrumb />
      <MasterFlightHistoryCard />
      <FlightDetails />
    </div>
  )
}

export default BookingDetails