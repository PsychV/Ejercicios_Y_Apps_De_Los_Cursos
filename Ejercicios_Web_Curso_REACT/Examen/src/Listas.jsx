import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";

import "./CSS.css";

class Listas extends Component {

    render() {
        let numerosPares = this.props.lista.filter(el => el % 2 === 0);
        let numerosImpares = this.props.lista.filter(el => el % 2 !== 0);

        if (this.props.lista.length === 0) {
            return <h5>No hay numeros...</h5>;
        }
        let i = 1;
        let listaPar = numerosPares.map(el => <li key={i++}>{el}</li>);

        
        let x = 1;
        let listaImpar = numerosImpares.map(el => <li key={x++}>{el}</li>);
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <h3>Lista Par</h3>
                        <ul>
                            {listaPar}
                        </ul>
                    </Col>
                    <Col md="6">
                        <h3>Lista Impar</h3>
                        <ul>
                            {listaImpar}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lista: state.arrayNumeros
    }
}


export default connect(mapStateToProps)(Listas);

