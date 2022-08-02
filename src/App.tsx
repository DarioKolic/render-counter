import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RenderCounter } from './components/RenderCounter/RenderCounter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <RenderCounter />
      </header>
    </div>
  );
}

export default App;
