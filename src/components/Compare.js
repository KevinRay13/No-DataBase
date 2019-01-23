import React, { Component } from "react";
import "../App.css";
import Player from "./Player";
import Render from "./Render";
class Compare extends Component {
  constructor() {
    super();

    this.state = {
      player1: "",
      player2: "",
      p1: []
    };
  }

  //   p1() {
  //     this.setState({
  //       p1: [...this.state.p1, this.state.player1],
  //       player1: ""
  //     });
  //   }
  p1Change(value) {
    this.setState({ player1: value });
  }
  p2Change(value) {
    this.setState({ player2: value });
  }

  render() {
    return (
      <div className="compare">
        <div className="compstats">Compare Stats</div>
        <div className="inputs">
          <div className="red">
            Player 1: {this.state.player1}
            <input
              value={this.state.player1}
              onChange={e => this.p1Change(e.target.value)}
              type="text"
              placeholder="player 1"
              className="p1"
            />
            <Player />
          </div>
          <div className="blue">
            Player 2: {this.state.player2}
            <input
              value={this.state.player2}
              onChange={e => this.p2Change(e.target.value)}
              type="text"
              placeholder="player 2"
              className="p2"
            />
            <Render />
          </div>
        </div>
      </div>
    );
  }
}

export default Compare;
