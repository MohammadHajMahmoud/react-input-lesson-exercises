import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    updateAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    alert = () => {
        alert("Come on  " + this.state.name + "  you are  " + this.state.age +"- which is old enogh")
    }

    render() {
        return (
            <div>
                <input id="name-input-ex1" value={this.state.name} onChange={this.updateName} />
                <input id="age-input" value={this.state.age} onChange={this.updateAge} />
                <button onClick={this.alert}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;