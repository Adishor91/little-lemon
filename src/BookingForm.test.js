import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];
  const mockSubmitForm = jest.fn();

  test('renders static text in BookingForm component', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText('Find a table for any occasion')).toBeInTheDocument();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  test('renders date input with correct attributes', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('renders time select with correct attributes and options', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('required');


    expect(screen.getByText('Select a time')).toBeInTheDocument();
    availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('renders guests input with correct attributes', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('placeholder', '1');
    expect(guestsInput).toHaveAttribute('required');
  });

  test('renders occasion select with correct attributes and options', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toBeInTheDocument();

    expect(screen.getByText('Select an occasion')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
  });

  test('submit button is initially disabled and becomes enabled with valid inputs', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-12-25' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });

    expect(submitButton).toBeEnabled();
  });
});
