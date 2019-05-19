import React, { Component } from "react";
import "./App.css";

import Velavimai from "./rodytiVelavimus";
import Prideti from "./pridetiKnyga";
import Istrinti from "./istrintiKnyga";
import Grazinti from "./grazintiKnyga";
import Isduoti from "./isduotiKnyga";
import Autorius from "./pridetiAutoriu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "0"
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
  } 

  handleClick(e) {
    this.setState({ view: e.target.value });
  }
  renderScreen() {
    switch (this.state.view) {
      case "0":
        return <Velavimai/>;
      case "1":
        return <Prideti/>;
      case "2":
        return <Istrinti/>;
      case "3":
        return <Isduoti/>;
      case "4":
        return <Grazinti/>;
      case "5":
        return <Autorius/>;
      default:
        return (
          <div>
            <h1>Unknown error has occured</h1>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="btn-group">
          <button onClick={this.handleClick} value="0">
            Vėlavimai
          </button>
          <button onClick={this.handleClick} value="1">
            Pridėti knygą
          </button>
          <button onClick={this.handleClick} value="5">
            Pridėti autorių
          </button>
          <button onClick={this.handleClick} value="3">
            Išduoti knygą
          </button>
          <button onClick={this.handleClick} value="4">
            Grąžinti knygą
          </button>
          <button onClick={this.handleClick} value="2">
            Ištrinti knygą
          </button>
        </div>
        {this.renderScreen()}
      </div>
    );
  }
}

export default App;
