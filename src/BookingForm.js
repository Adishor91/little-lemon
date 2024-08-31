import React, { useState, useEffect } from 'react';

const fetchAPI = window.fetchAPI;
const submitAPI = window.submitAPI;

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = async () => {
    try {
      const today = new Date().toISOString().split('T')[0]; 
      const times = await fetchAPI(today);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error initializing available times:", error);
    }
  };

  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error updating available times:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    try {
      const success = await submitAPI(formData);
      if (success) {
        alert('Reservation made successfully!');
      } else {
        alert('Failed to make reservation. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (date) {
      updateTimes(date);
    }
  }, [date]);

  return (
    <div className="booking-form">
      <h1 className="booking-title">Little Lemon</h1>
      <h3 className="booking-subtitle">Chicago</h3>
      <h3 className="booking-text">Find a table for any occasion</h3>

      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" className="submit-reservation-button" />
      </form>
    </div>
  );
};

export default BookingForm;
