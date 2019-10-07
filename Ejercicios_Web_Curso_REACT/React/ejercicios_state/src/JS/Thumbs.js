import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'


export default class Thumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alerta: true };
        this.changeAlert =
        this.changeAlert.bind(this);

    }
    changeAlert() {
        this.setState({
            alerta: !this.state.alerta
        })
    }
    render() {
        let IconSelected;
        if (this.state.alerta) {
            IconSelected = faThumbsDown;
        }
        else {
            IconSelected = faThumbsUp;
        }
        return (
            <FontAwesomeIcon className="Icono" onClick={this.changeAlert}z icon={IconSelected} />

        )
    }
}
