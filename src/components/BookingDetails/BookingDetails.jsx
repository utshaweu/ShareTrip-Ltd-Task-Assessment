import React from 'react'
import styles from './BookingDetails.module.scss';
import Breadcrumb from './Breadcrumb';

const BookingDetails = () => {
  return (
    <div className={styles.booking_details}>
      <Breadcrumb />
    </div>
  )
}

export default BookingDetails