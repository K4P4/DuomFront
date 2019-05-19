import React, { Component } from "react";
const axios = require('axios');

class Prideti extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isbn: "",
        pavad: "",
        autor_id: "",
        leidykla: "",
        leid_met: "",
        paras_met: "",
        psl: "",
        kalba: "",
        isd_laik: "",
        prates_kart: "",
        returned: false,
        message: ""
    };

    this.handleChangeISBN = this.handleChangeISBN.bind(this);
    this.handleChangePavad = this.handleChangePavad.bind(this);
    this.handleChangeAuthID = this.handleChangeAuthID.bind(this);
    this.handleChangePublish = this.handleChangePublish.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeWYear = this.handleChangeWYear.bind(this);
    this.handleChangePages = this.handleChangePages.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeExtend = this.handleChangeExtend.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.post('http://localhost:3001/proc/createBook', this.state)
    .then( (response)=> {
      this.setState({ message: `Knyga pridėta sėkmingai su ID: ${response.data.id}`, returned: true});
    })
    .catch( (error)=> {
      this.setState({ message: "Įvyko klaida pridėdant knygą", returned: true });
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

  handleChangeISBN(e) {
    this.setState({ isbn: e.target.value });
  }
  handleChangePavad(e) {
    this.setState({ pavad: e.target.value });
  }
  handleChangeAuthID(e) {
    this.setState({ autor_id: e.target.value });
  }
  handleChangePublish(e) {
    this.setState({ leidykla: e.target.value });
  }
  handleChangeYear(e) {
    this.setState({ leid_met: e.target.value });
  }
  handleChangeWYear(e) {
    this.setState({ paras_met: e.target.value });
  }
  handleChangePages(e) {
    this.setState({ psl: e.target.value });
  }
  handleChangeLang(e) {
    this.setState({ kalba: e.target.value });
  }
  handleChangeTime(e) {
    this.setState({ isd_laik: e.target.value });
  }
  handleChangeExtend(e) {
    this.setState({ prates_kart: e.target.value });
  }


  render(className) {
    const { isbn, pavad, autor_id, leidykla, leid_met, paras_met, psl, kalba, isd_laik, prates_kart} = this.state;
    const isEnabled = isbn.length > 0 && pavad.length > 0 && autor_id.length > 0
    && leidykla.length > 0 && leid_met.length > 0 && paras_met.length > 0 && psl.length > 0
    && kalba.length > 0 && isd_laik.length > 0 && prates_kart.length > 0
    return (
      <div className = "ivedimoLentele">
        <h2> Įveskite knygos duomenis</h2>
      <label for = "isbn"> ISBN * </label>
        <input id = "isbn" value={this.state.isbn} onChange={this.handleChangeISBN} />
      <label for = "pavad"> Pavadinimas * </label>
        <input id = "pavad" value={this.state.pavad} onChange={this.handleChangePavad} />
      <label for = "authID"> Autoriaus ID * </label>
        <input id = "authID" value={this.state.autor_id} onChange={this.handleChangeAuthID} />
      <label for = "publish"> Leidejas * </label>
        <input id = "publish" value={this.state.leidykla} onChange={this.handleChangePublish} />
      <label for = "year"> Leidimo metai * </label>
        <input id = "year" value={this.state.leid_met} onChange={this.handleChangeYear} />
      <label for = "wyear"> Parasymo metai * </label>
        <input id = "wyear" value={this.state.paras_met} onChange={this.handleChangeWYear} />
      <label for = "psl"> Puslapių skaičius * </label>
        <input id = "psl" value={this.state.psl} onChange={this.handleChangePages} />
      <label for = "lang"> Kalba * </label>
        <input id = "lang" value={this.state.kalba} onChange={this.handleChangeLang} />
      <label for = "isd"> Išdavimo laikas * </label>
        <input id = "isd" value={this.state.isd_laik} onChange={this.handleChangeTime} />
      <label for = "prat"> Pratęsimų kiekis * </label>
        <input id = "prat" value={this.state.prates_kart} onChange={this.handleChangeExtend} />
        <button disabled={!isEnabled} className = "confirm" onClick={this.handleClick}>Patvirtinti</button>
        {
        this.displayMessage()
        }
      </div>
    );
  }
}

export default Prideti;
