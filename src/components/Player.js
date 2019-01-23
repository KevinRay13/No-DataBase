import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Player extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      player1: [],
      image: "",
      id: 1
    };
    // this.updatChars = this.updateChars.bind(this);
    // this.deleteChars = this.deleteChars.bind(this);
  }
  baseUrl = "http://localhost:3001/api/characters";

  componentDidMount() {
    axios.get("http://localhost:3001/api/characters").then(results => {
      this.setState({ characters: results.data });
    });
  }

  //   updateChars() {}
  //   deleteChars() {}

  picChanger = () => {
    let idUp = this.state.id + 1;

    this.setState({ id: idUp });

    // console.log(this.state.id);
  };

  render() {
    {
      this.state.characters.map((val, i) => {
        return val.img;
      });
    }
    return (
      <div className="imgbox">
        <img
          className="mainPics"
          src="http://kuroganehammer.com/Smash4/logo2/Zero%20Suit%20Samus.png"
          alt=""
        />

        {/* <button onClick={this.picChanger}>img</button> */}
      </div>
    );
  }
}

export default Player;
