import React from 'react';
import './App.css';

import Header from "./Components/Header";
import ContentBlock from "./Components/ContentBlock";

import { content } from "./config"

function App() {
  return (
    <div className="App">
      <Header/>
      {content.map(item => (
        <ContentBlock key={`content-block-${item.id}`} {...item} />
      ))}
    </div>
  );
}

export default App;
