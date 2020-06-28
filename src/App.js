import React from 'react';
import './App.css';

import Header from "./Components/Header";
import Onderzoek from "./Components/Onderzoek";
import Brainstorm from "./Components/Brainstorm";
import Doelgroep from "./Components/Doelgroep";
import Prototyping from "./Components/Prototyping";
import Team from "./Components/Team";
import ContentBlock from "./Components/ContentBlock";

// This content needs to be filled up with content 
const content = [
  {
    id: 1,
    title: "Onderzoek",
    bgColor: true
  },
  {
    id: 2,
    title: "Brainstorm",
    bgColor: false
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      {content.map(({id, title, bgColor}) => (
        <ContentBlock key={`content-block-${id}`} bgColor={bgColor} title={title} />
      ))}
      <Doelgroep/>
      <Prototyping/>
      <Team/>
    </div>
  );
}

export default App;
