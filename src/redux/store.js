// Import the create store function from the redux library.
import { createStore } from "redux";

// Import the cake reducer that we created earlier. We will need
// to pass this into the store.
import cakeReducer from "./cakes/cakeReducer";

// Create the store.
const store = createStore(cakeReducer);

// Export the store.
export default store;
