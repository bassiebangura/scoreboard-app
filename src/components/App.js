import React from "react";
import Header from "./Header";
import Player from "./Player";
import Stats from "./Stats"
import "./App.css";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Bassie",
        score: 10,
        id: 1
      },
      { name: "Joseph", score: 15, id: 2 },
      { name: "Junior", score: 20, id: 3 },
      { name: "Bangura", score: 25, id: 4}
    ]
  };

  handleScoreChange = ( index, delta) => {
    
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {this.state.players.map((player, index) => (
          <Player
          index={index}
            changeScore={this.handleScoreChange}
            score={player.score}
            id={player.id}
            name={player.name}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
