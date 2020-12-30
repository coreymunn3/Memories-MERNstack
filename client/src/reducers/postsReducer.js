const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'UPDATE_POST':
    case 'LIKE_POST':
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case 'DELETE_POST':
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
