import React from "react";

// Import the Connect function from the react redux method.
import { connect } from "react-redux";

// Import the buyCake action creator that you created.
import { buyCake } from "../redux/cakes/cakeActions";

// Create the cakeContainer
// Extract and display the state from the props
// Extact and dispatch the buyCake action from the props
const CakeContainer = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes} </h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

// Map the state to the props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// Map the dispatch to the props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// Use the connect function to connect the redux with the props of the react component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
