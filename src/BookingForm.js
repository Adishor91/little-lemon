import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      // Ensure all fields meet the required conditions
      const isValid = date && time && guests >= 1 && guests <= 10;
      setIsFormValid(isValid);
    };

    validateForm();
  }, [date, time, guests]); // Validate the form whenever these values change

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Call the submitForm function passed as a prop
    submitForm(formData);
  };

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
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="" disabled>Select a time</option>
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
          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
          required
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

        <input
          type="submit"
          value="Make Your reservation"
          className="submit-reservation-button"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
};

export default BookingForm;
