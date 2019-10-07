import React, { Component } from 'react'


export default class Tricolor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alerta: 0 };
        this.changeAlert =
            this.changeAlert.bind(this);

    }
    changeAlert() {
        this.setState({
            alerta: this.state.alerta + 1
        })
    }
    render() {
        let ColorSelected;
        if (this.state.alerta === 4) {
            this.setState({
                alerta: 0
            })
        }
        switch (this.state.alerta) {
            case 0:
                ColorSelected = "grey";
                break;
            case 1:
                ColorSelected = "red";
                break;
            case 2:
                ColorSelected = "green";
                break;
            case 3:
                ColorSelected = "blue";
                break;
        }
        return (
            <div onClick={this.changeAlert} style={{ backgroundColor: ColorSelected, height:50, width:50, borderRadius:25}} />

        )
    }
}
