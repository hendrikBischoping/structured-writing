import './App.css'
import { Children, useState } from 'react';
import Header from './components/header/Header.jsx';
import SectionNav from './components/section-vav/SectionNav.jsx';
import MainContent from './components/main-content/MainContent.jsx';

function App() {

  const [greeting, setGreeting] = useState();
  function onOpenSection(newGreeting) {
    function displayGreeting() {
      return <h1>{newGreeting}</h1>;
    }
    setGreeting(displayGreeting);
  }
  
  function onSelectSection(x) {
    console.log(x);
  }

  return <div id='general-content'>
    <Header></Header>
    <div id='app-content'>
      <SectionNav onOpenSection={(w) => onSelectSection(w)}></SectionNav>
      <MainContent></MainContent>
    </div>
  </div>
}

export default App