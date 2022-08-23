import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCREMENT",
      counter: counter + 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: "DECREMENT",
      counter: counter !== 0 ? counter - 1 : 0,
    });
  };

  const addBy = () => {
    dispatch({
      type: "ADD_BY",
      payload: 10,
    });
  };
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
