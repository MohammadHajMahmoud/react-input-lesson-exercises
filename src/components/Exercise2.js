import React, { Component } from 'react';
class Exercise2 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            fruit: ""
        }
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateFruit = async (event) => {
        await this.setState({
            fruit: event.target.value
        })
        console.log(this.state.name + ' loves ' + this.state.fruit)
    }

    render() {
        return (
            <div>
                <input id="name-input" onChange={this.updateName} />
                <select id="select-input" onChange={this.updateFruit}>
                    <option value={'apple'}>apple</option>
                    <option value={'pineapple'}>Ananas</option>
                    <option value={'orange'}>orange</option>
                </select>
            </div>
        )
    }
}

export default Exercise2;