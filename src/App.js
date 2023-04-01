import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Board from "./components/Board.js"

function App() {
  const buttons = [1, 2, 3, 4, "Bob"];
  return (
    <div className="App">
      <Board />
      {/* Moved commented parts to Board.js: */}
      {/* <h1>Counter Demo App</h1>
      {buttons.map((element, index) => (
        <Counter
          name={"Button " + element}
          key={"button" + index}
          color="red"
        />
      ))}
    </div> */}
    </div>
  );
}

{/* Option 2 to get the 3 buttons: */ }
{/* function App() {
  return (
    <div className="App">
      <h1>Counter Demo App</h1>
      <Counter name="Button 1" />
      <Counter name="Button 2" />
      <Counter />
    </div>
  );
} */}

//Moved this to Counter.js:
// function Counter({ name = "No Name Button", color }) {
//   const [value, setValue] = useState(0);
//   return (
//     <>
//       <h2>{color}</h2>
//       <h3>{name}</h3>
//       <p>{value}</p>
//       <button onClick={() => setValue(value + 1)}>Increment</button>
//       <button onClick={() => setValue(value - 1)}>Decrement</button>
//     </>
//   );
// }

export default App;
