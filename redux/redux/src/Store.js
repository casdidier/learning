// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const defaultState = [];

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD: 
      return [...state, action.message]
    default: 
      return state;
  }
}

const store = Redux.createStore(messageReducer);

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
};
