export const initializeTimes = () => {
    return fetchAPI(); // fetchAPI is available globally
  };

  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          date: action.payload.date, // Update the state with the selected date
          times: fetchAPI(action.payload.date), // Fetch new times based on the selected date
        };
      default:
        return state;
    }
  };
