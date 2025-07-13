import './App.css'
import { useState } from 'react';

function App() {

  const [greeting, setGreeting] = useState();
  let clicked = false;
  function handleClick(newGreeting) {
    function displayGreeting() {
      return <h1>{newGreeting}</h1>;
    }
    setGreeting(displayGreeting);
  }

  return <div>
    {!greeting ? <h1>Select a button!</h1>: greeting}
    <button onClick={() => handleClick('Hello there!')}>Hello there!</button>
    <button onClick={() => handleClick('Hello you!')}>Hello you!</button>
    <button onClick={() => handleClick('Hello man!')}>Hello man!</button>
    <button onClick={() => handleClick('Hello world!')}>Hello world!</button>
  </div>
}

export default App
