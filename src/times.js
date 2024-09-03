export const initializeTimes = async () => {
    return await fetchAPI();
  };

  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return state;
      default:
        return state;
    }
  };
