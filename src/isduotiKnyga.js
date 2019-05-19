import React, { Component } from "react";
const axios = require('axios');

class Isduoti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookid: "",
            returned: false,
            message: "",
            userid: ""
        };

        this.handleChangeBook = this.handleChangeBook.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.post('http://localhost:3001/proc/issueBook', this.state)
        .then( (response)=> {
          this.setState({ message: `Knyga išduota sėkmingai`, returned: true});
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

    handleChangeBook(e) {
        this.setState({ bookid: e.target.value });
    }
    handleChangeUser(e) {
        this.setState({ userid: e.target.value });
      }

    render() {
        return (
            <div className = "ivedimoLentele">
            <h2> Įveskite knygos ID <br></br> ir vartotojo ID</h2>
        <label for = "userid"> Vartotojo ID * </label>
        <input id = "userid" value={this.state.userid} onChange={this.handleChangeUser} />
        <label for = "bookid"> Knygos ID </label>
        <input id = "bookid" value={this.state.bookid} onChange={this.handleChangeBook} />
        <button className = "confirm" onClick={this.handleClick}>Patvirtinti</button>
        {
        this.displayMessage()
        }
        <h2><br></br> <br></br> <br></br></h2>
        <h2><br></br> <br></br> <br></br></h2>
        </div>
    );
    }
}

export default Isduoti;