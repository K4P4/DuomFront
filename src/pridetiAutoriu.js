import React, { Component } from "react";
const axios = require('axios');

class Autorius extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vard: "",
        slapyvard: "",
        kilme: "",
        gim_met: "",
        mirt_met: "",
        returned: false,
        message: ""
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePseudo = this.handleChangePseudo.bind(this);
    this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
    this.handleChangeBirth = this.handleChangeBirth.bind(this);
    this.handleChangeDeath = this.handleChangeDeath.bind(this);
    this.displayMessage= this.displayMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.post('http://localhost:3001/proc/createAuthor', this.state)
    .then( (response)=> {
      this.setState({ message: `Autorius pridėtas sėkmingai su ID: ${response.data.id}`, returned: true});
    })
    .catch( (error)=> {
      this.setState({ message: "Įvyko klaida pridėdant autorių", returned: true });
    });
  }

  displayMessage() {
    if(this.state.returned){
    return(
      <div>
        <h2>{this.state.message}</h2>
      </div>
    )
    }
  }

  handleChangeName(e) {
    this.setState({ vard: e.target.value });
  }
  handleChangePseudo(e) {
    this.setState({ slapyvard: e.target.value });
  }
  handleChangeOrigin(e) {
    this.setState({ kilme: e.target.value });
  }
  handleChangeBirth(e) {
    this.setState({ gim_met: e.target.value });
  }
  handleChangeDeath(e) {
    this.setState({ mirt_met: e.target.value });
  }


  render(className) {
    const { vard, kilme, gim_met} = this.state;
    const isEnabled = vard.length > 0 && kilme.length > 0 && gim_met.length > 0
    return (
      <div className = "ivedimoLentele">
        <h2> Įveskite autoriaus duomenis</h2>
      <label for = "name"> Vardas, pavarde * </label>
        <input id = "name" value={this.state.vard} onChange={this.handleChangeName} />
      <label for = "pseudo"> Slapyvardis </label>
        <input id = "pseudo" value={this.state.slapyvard} onChange={this.handleChangePseudo} />
      <label for = "origin"> Kilmė * </label>
        <input id = "origin" value={this.state.kilme} onChange={this.handleChangeOrigin} />
      <label for = "birth"> Gimimo metai * </label>
        <input id = "birth" value={this.state.gim_met} onChange={this.handleChangeBirth} />
      <label for = "death"> Mirties metai </label>
        <input id = "death" value={this.state.mirt_met} onChange={this.handleChangeDeath} />
        <button disabled={!isEnabled} className = "confirm" onClick={this.handleClick}>Patvirtinti</button>
      {
        this.displayMessage()
      }
      </div>
    );
  }
}

export default Autorius;
