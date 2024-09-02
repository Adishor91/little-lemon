import React from 'react';
import BookingForm from './BookingForm'; // Import BookingForm component

const BookingPage = ({ availableTimes, submitForm }) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
