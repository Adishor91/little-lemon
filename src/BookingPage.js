import React from 'react';
import BookingForm from './BookingForm'; // Import BookingForm component

const BookingPage = ({ availableTimes }) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default BookingPage;
