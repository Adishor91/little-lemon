import { initializeTimes, updateTimes } from './times';

// Mock the global fetchAPI function
beforeAll(() => {
  global.fetchAPI = jest.fn();
});

describe('initializeTimes', () => {
  it('should return a non-empty array of available booking times', async () => {
    const mockTimes = ['17:00', '18:30', '19:45'];

    // Mock the fetchAPI function to return a resolved promise
    global.fetchAPI.mockResolvedValue(mockTimes);

    const times = await initializeTimes();

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(times).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same state for an unknown action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should return the same state for the UPDATE_TIMES action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00'];
    const action = { type: 'UPDATE_TIMES' };

    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
