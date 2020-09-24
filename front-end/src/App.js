import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <div className="main">
        <a href="/"><h1>CakeStation</h1></a>
        <hr />
        <a href="/cakes">View all Cakes</a>
        <a href="/cakes/mine">View Your Cakes</a>
        <a href="/cakes/new">Add your own Cake</a>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
