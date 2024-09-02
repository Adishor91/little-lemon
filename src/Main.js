import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import OurMenu from './OurMenu';
import ConfirmedBooking from './ConfirmedBooking';

// Example API call function (you should replace this with your actual API function)
const submitAPI = async (formData) => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.success; // or whatever indicates success
  } catch (error) {
    console.error('Submit API error:', error);
    return false;
  }
};

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmation'); // Navigate to the confirmation page on success
      } else {
        alert('Failed to make reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      // Simulate fetching available times and updating state
      // Replace with actual API call if necessary
      // const times = await fetchAPI();
      // setAvailableTimes(times);
    };

    fetchAvailableTimes();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} submitForm={submitForm} />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
};

export default Main;
