import React, { useState } from "react";

const BookingForm = () => {
  // State variables to track form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // State variable for available times
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
    // Additional form submission logic can go here
  };

  return (
    <div>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <h3>Find a table for any occasion</h3>

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

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
