import React from 'react';
import './App.css';

import Header from "./Components/Header";
import Onderzoek from "./Components/Onderzoek";
import Brainstorm from "./Components/Brainstorm";
import Doelgroep from "./Components/Doelgroep";
import Prototyping from "./Components/Prototyping";
import Team from "./Components/Team";

// Todo's 
// - Add contentblock file
// - Make functional component
// - Look for comparisions (in all components) which you can make dynamic 
// - Make an array with content 
// - Render the contentblock(s) with the content

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
