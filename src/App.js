import React, { Component } from "react";
import Compare from "./components/Compare";
import "./App.css";
import axios from "axios";

import Title from "./components/Title";
import Smash from "./components/Smashball";
class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      player1: "http://kuroganehammer.com/Smash4/logo2/Zero%20Suit%20Samus.png",
      player2: "",
      id: 0
    };
    //this.updatChars = this.updateChars.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/characters").then(results => {
      this.setState({ characters: results.data });
      // console.log(results.data);
    });
  }
  // updateChars = e => {
  //   let currentImage = this.target.value;
  //   this.setState = { player1: currentImage };
  // };

  deleteChars(id) {
    axios
      .delete("http://localhost:3001/api/characters/:id", id)
      .then(results => {
        //console.log(results);
        this.setState({ characters: results.data });
      });
  }
  createChars() {
    axios
      .post("http://localhost:3001/api/characters/:name", {
        name: "Kevin",
        img: "http://kuroganehammer.com/Smash4/logo2/Corrin.png"
      })
      .then(results => {
        //console.log(results.data);
        this.setState({ characters: results.data });
      });
  }

  render() {
    let idCard = this.state.characters.map((val, i) => {
      return (
        <div key={i} className="chars">
          <img src={val.img} alt="character" />
          <br />
          Name: {val.name} <br /> ID: {val.OwnerId}
          <button className="del" onClick={() => this.deleteChars()}>
            delete
          </button>
        </div>
      );
    });
    return (
      <div className="body">
        <div className="topbox">
          <Smash /> <Title /> <Smash />
        </div>
        <Compare />
        <button className="create" onClick={() => this.createChars()}>
          create
        </button>
        <div className="allchars">
          {idCard}
          {/* {this.state.characters.map((val, i) => {
            return (
              <div className="chars">
                <img src={val.img} alt="character" />
                <br />
                Name: {val.name} <br /> ID: {val.OwnerId}
                <button className="del" onClick={() => this.deleteChars()}>
                  delete
                </button>
              </div>
            );
          })} */}
        </div>
        <Title />
      </div>
    );
  }
}

export default App;
