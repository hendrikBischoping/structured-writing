import './App.css'
import { useState } from 'react';

function App() {
  let [newGreeting, setNewGreeting] = useState('Hello world!');
  let changedContent = 'Hello there!';
  let clicked = false;
  function changeContent() 
  {
    changedContent = newGreeting;
    console.log('test');
    setNewGreeting();
  }

  return <div>
    <h1>{clicked ? changedContent : newGreeting }</h1>
    <button onClick={() => changeContent}>change</button>
  </div>;
}

export default App
