import './App.css'
import { useState } from 'react';
import Header from './components/header/Header.jsx';
import SectionNav from './components/section-vav/SectionNav.jsx';
import MainContent from './components/main-content/MainContent.jsx';

function App() {

  let SECTIONS = {
    'choose-a-topic': 'Choose a Topic!',
    'new-project': 'New Project!',
    'my-projects': 'My Projects!'
  }

  const [ chosenContent, setChosenContent ] = useState('choose-a-topic')
  
  function onSelectSection(chosenSection) {
    // console.log(chosenSection);
    setChosenContent(chosenSection);
  }

  return <div id='general-content'>
    <Header></Header>
    <div id='app-content'>
      <SectionNav onOpenSection={(w) => onSelectSection(w)}></SectionNav>
      <MainContent>{SECTIONS[chosenContent]}</MainContent>
    </div>
  </div>
}

export default App