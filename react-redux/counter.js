// https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux


const INCREMENT = 'INCREMENT';  // define a constant for increment action types
const DECREMENT = 'DECREMENT';  // define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: 
      return (state + 1);
    case DECREMENT: 
      return (state - 1);
    default: 
      return state;
  }
}; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  INCREMENT;
}; // define an action creator for incrementing

const decAction = () => {
  DECREMENT;
}; // define an action creator for decrementing

const store = Redux.createStore(counterReducer);  // define the Redux store here, passing in your reducers
