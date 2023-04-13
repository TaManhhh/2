import React from 'react';
import './App.css';
import Router from './Routes';
import Header from './page/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Router/>
    </div>
  );
}

export default App;
