import React, { Component } from "react";
const axios = require('axios');

class Trinti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookid: "",
            returned: false,
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.post('http://localhost:3001/proc/deleteBook', this.state)
        .then( (response)=> {
          this.setState({ message: `Knyga ištrinta sėkmingai`, returned: true});
        })
        .catch( (error)=> {
          this.setState({ message: "Įvyko klaida", returned: true });
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

    handleChange(e) {
        this.setState({ bookid: e.target.value });
    }

    render() {
        return (
            <div className = "lentele">
            <h2> Įveskite norimos ištrinti knygos ID</h2>
            <input value={this.state.bookid} onChange={this.handleChange} />
            <button className = "confirm" onClick={this.handleClick}>Patvirtinti</button>
            {
            this.displayMessage()
            }
            </div>
    );
    }
}

export default Trinti;