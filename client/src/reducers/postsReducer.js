const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_POST':
      return [...state, action.payload];
    default:
      return state;
  }
};
