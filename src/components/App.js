import React from "react";
import Header from "./Header";
import Player from "./Player";
import "./App.css";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Bassie",
        id: 1
      },
      { name: "Joseph", id: 2 },
      { name: "Junior", id: 3 }
    ]
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

        {this.state.players.map(player => (
          <Player
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
