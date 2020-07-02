import React from 'react';
import './App.css';

import Header from "./Components/Header";
import Onderzoek from "./Components/Onderzoek";
import Brainstorm from "./Components/Brainstorm";
import Doelgroep from "./Components/Doelgroep";
import Prototyping from "./Components/Prototyping";
import Team from "./Components/Team";
import ContentBlock from "./Components/ContentBlock";

import { content } from "./config"

function App() {
  return (
    <div className="App">
      <Header/>
      {content.map(({id, title, bgColor}) => (
        <ContentBlock key={`content-block-${id}`} bgColor={bgColor} title={title} />
      ))}
    </div>
  );
}

export default App;
