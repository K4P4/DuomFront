import React, { Component } from "react";
const axios = require('axios');

class Velavimai extends Component {
    constructor(props) {
      super(props);
      this.state = {
          result: []
      };
      this.getInfo = this.getInfo.bind(this);
    }

    getInfo() {
        axios.post('http://localhost:3001/proc/getDelayedReturns', {page: 1})
        .then( (response)=> {
            console.log(response.data);
          this.setState({ result:response.data});
        })
        .catch( (error)=> {
            console.log(error);
          console.log("Error while getting delayed returns");
        });
      }

    
    render(){
        return(
            <div>
                <button onClick={this.getInfo}> Gauti Vėlavimus </button>
                <div className = "elementai">
                {
                    this.state.result.map((Vel, index)=>{return(<Velavimas key = {index} Vel = {Vel}></Velavimas>)})
                }
                </div>
            </div>
        )
    }

}

class Velavimas extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render(){
return(
    <div className = "elementas">
    <h3><b>Vardas:</b> {this.props.Vel.vart_vard} <b>  Velavimo laikas:</b> {this.props.Vel.liko_dien}d. </h3>
    <h3><b>Telefonas:</b> {this.props.Vel.tel_nr} <b>  Pastas:</b> {this.props.Vel.el_past} </h3>
    <h3><b>Knygos pavadinimas:</b> {this.props.Vel.pavad} <b>  Autorius:</b> {this.props.Vel.vard} <b>  Knygos ID:</b> {this.props.Vel.id} </h3>
    </div>
)
}

}
export default Velavimai;