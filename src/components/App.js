import React from "react";
import "./App.css";

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Bassie
      </span>
      <Counter />
    </div>
  )
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">5</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}


function App() {
  return (
    <Player />
  );
}

export default App;
