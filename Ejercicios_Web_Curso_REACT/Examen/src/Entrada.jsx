import React, { Component } from "react";

import { Container, Row, Col, InputGroup, Input, Button } from "reactstrap";

import { connect } from "react-redux";

import "./CSS.css"



class Entrada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayNumeros: ""
        };
        this.updateNumero = this.updateNumero.bind(this);
        this.sendNumero = this.sendNumero.bind(this);
        this.sendBorrar = this.sendBorrar.bind(this);
      }
    
      updateNumero(event) {
        this.setState({ arrayNumeros: event.target.value });
      }
    
      sendNumero() {
        this.props.dispatch({
          type: "NEW_NUMERO",
          item: this.state.arrayNumeros
        });
        this.setState({palabra: ''});
      }

      sendBorrar() {
        this.props.dispatch({
          type: "BORRAR_NUMERO",
          item: this.state.arrayNumeros
        });
      }

    render() {
        return (
            <Container>
                <Row>
                    <Col >
                        <h3>Valor</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <InputGroup>

                            <Input  type="text"
                                placeholder="Introduce un número y pulsa el botón"
                                value={this.state.arrayNumeros} onChange={this.updateNumero} />

                            <Button   color="primary" 
                            onClick={this.sendNumero}>Enviar!</Button>

                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="CreaNumeros">
                    <Button   color="secondary" 
                            onClick={this.sendBorrar}>Borrar Todo</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect()(Entrada);

