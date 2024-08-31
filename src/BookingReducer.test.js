import { initializeTimes, updateTimes } from './BookingReducer';

describe('BookingReducer', () => {
  
  // Test for initializeTimes function
  test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    const times = initializeTimes();
    
    expect(times).toEqual(expectedTimes);
  });

  // Test for updateTimes function
  test('updateTimes returns the same state that is provided', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-09-01' };
    
    const updatedState = updateTimes(initialState, action);
    
    expect(updatedState).toEqual(initialState);
  });

});
