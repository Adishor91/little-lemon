import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders static text in BookingForm component', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];

  render(<BookingForm availableTimes={availableTimes} />);

  // Check for static text
  expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  expect(screen.getByText('Chicago')).toBeInTheDocument();
  expect(screen.getByText('Find a table for any occasion')).toBeInTheDocument();
  expect(screen.getByText('Choose date')).toBeInTheDocument();
  expect(screen.getByText('Choose time')).toBeInTheDocument();
  expect(screen.getByText('Number of guests')).toBeInTheDocument();
  expect(screen.getByText('Occasion')).toBeInTheDocument();
  expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
});
