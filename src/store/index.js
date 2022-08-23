import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducerFn = (state = initialState, action) => {
  // Synchronous Function
  //   We must not mutate the original state

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: action.counter,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: action.counter,
      };
    case "ADD_BY":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducerFn);
export default store;
