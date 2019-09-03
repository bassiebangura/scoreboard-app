import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
};

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">{props.player}</span>
      <Counter score={props.score} />
    </div>
  );
};

class Counter extends React.Component {

  render () {
     return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  } 
} 
 


function App() {
  return (
    <div className="scoreboard">
      <Header />
      <Player player="Bassie Bangura" score={30} />
    </div>
  );
}

export default App;
