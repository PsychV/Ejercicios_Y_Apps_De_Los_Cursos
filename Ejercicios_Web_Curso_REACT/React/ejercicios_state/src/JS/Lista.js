import React, { Component } from 'react'
import { CIUTATS } from "../JS/datos.js";


export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.RellenarInput = this.RellenarInput.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    RellenarInput(event) {
        this.setState({ value: event.currentTarget.firstChild.data });
    }
    render() {
        let ListCities = CIUTATS.filter(el => el.toLowerCase().includes(this.state.value.toLowerCase())).map(el => <li onClick={this.RellenarInput} key={el}>{el}</li>);
        return (
            <>
                <ul>
                    {ListCities}
                </ul>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </>
        )
    }
}