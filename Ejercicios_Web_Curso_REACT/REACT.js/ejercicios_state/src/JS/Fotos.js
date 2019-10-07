import React, { Component } from 'react'


export default class Fotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Coche" };
        this.changeAlert =
            this.changeAlert.bind(this);

    }
    changeAlert() {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        let ImageSelected;
        switch (this.state.value) {
            case "Coche":
                ImageSelected = "http://placekitten.com/200/300";
                break;
            case "Moto":
                ImageSelected = "http://placekitten.com/250/300";
                break;
            case "Bici":
                ImageSelected = "http://placekitten.com/300/300";
                break;
            case "Bus":
                ImageSelected = "http://placekitten.com/400/300";
                break;

        }
        return (
            <>
                <select value={this.state.value} onChange={this.changeAlert}>
                    <option value="Coche">Coche</option>
                    <option value="Moto">Moto</option>
                    <option value="Bici">Bici</option>
                    <option value="Bus">Bus</option>
                </select>
                <img src={ImageSelected} />
            </>

        )
    }
}
/* 

*/