import React from "react";

const Stats = props => {
  let totalNumberPlayers = props.players.length;
  
  //use the reduce() to calculate the total points of all the players.
  let totalPoints = props.players.reduce((total, player) => {
      return total + player.score
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players: </td>
          <td>{totalNumberPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
