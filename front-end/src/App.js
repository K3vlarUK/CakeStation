import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>CakeStation</h1>
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
