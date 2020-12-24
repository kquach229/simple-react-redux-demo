// Import the BUY_CAKE action constant.
import { BUY_CAKE } from "./cakeTypes";

// Create the initialState.
const initialState = {
  numOfCakes: 5,
};

// Create the cake reducer, and pass in the state and action.
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };

    default:
      return state;
  }
};

// Export the cake reducer
export default cakeReducer;
