import { initializeTimes, updateTimes } from './times';

describe('initializeTimes', () => {
  it('should return a non-empty array of available booking times', () => {
    const mockTimes = ['17:00', '18:30', '19:45'];

    // Mock the global fetchAPI function
    global.fetchAPI = jest.fn().mockReturnValue(mockTimes);

    const times = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();  // Verify fetchAPI was called
    expect(times).toEqual(mockTimes);     // Check if the return value matches the mock data
  });
});

describe('updateTimes', () => {
  it('should update the state with new times based on the selected date', () => {
    const initialState = {
      date: null,
      times: ['17:00', '18:00', '19:00', '20:00'],
    };

    const selectedDate = '2024-09-01';
    const newTimes = ['18:30', '19:45', '20:15'];

    // Mock the global fetchAPI function to return new times based on the date
    global.fetchAPI = jest.fn().mockReturnValue(newTimes);

    const action = {
      type: 'UPDATE_TIMES',
      payload: {
        date: selectedDate,
      },
    };

    const newState = updateTimes(initialState, action);

    // Verify fetchAPI was called with the correct date
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    // Ensure the state was updated with the new date and times
    expect(newState).toEqual({
      date: selectedDate,
      times: newTimes,
    });
  });

  it('should return the same state for an unknown action type', () => {
    const initialState = {
      date: null,
      times: ['17:00', '18:00', '19:00', '20:00'],
    };

    const action = { type: 'UNKNOWN_ACTION' };

    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
