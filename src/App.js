import React from 'react';
import './App.css';

import Header from "./Components/Header";
import Onderzoek from "./Components/Onderzoek";
import Brainstorm from "./Components/Brainstorm";
import Doelgroep from "./Components/Doelgroep";
import Prototyping from "./Components/Prototyping";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App">
      <Header/>
      <Onderzoek/>
      <Brainstorm/>
      <Doelgroep/>
      <Prototyping/>
      <Team/>
    </div>
  );
}

export default App;
