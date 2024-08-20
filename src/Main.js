import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm'; // Import BookingForm component
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import OurMenu from './OurMenu';

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} />
      </Routes>
    </div>
  );
};

export default Main;
