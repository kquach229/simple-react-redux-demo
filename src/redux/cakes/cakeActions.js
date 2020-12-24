// Import the BUY_CAKE constant that we create.
import { BUY_CAKE } from "./cakeTypes";

// Create and export the buyCake action creator
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
