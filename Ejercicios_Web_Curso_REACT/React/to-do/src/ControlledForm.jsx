import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ControlledForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            email: "",
            password: "",
            address: "",
            ciutat: "",
            comarca: "",
            cpostal: "",
            accepto: "",
            modal: true,

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ modal: true });
     
    }

    render() {


        return (
            <Container>
                <br />
                <br />
                <h1>Controlled</h1>
                <Form onSubmit={this.handleSubmit} >
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input required value={this.state.email} onChange={this.handleInputChange} type="email" name="email" id="exampleEmail" placeholder="entra email" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" id="examplePassword" placeholder="entra password" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleNom">Nom complet</Label>
                        <Input required value={this.state.nom} onChange={this.handleInputChange} type="text" name="nom" id="exampleNom" placeholder="nom..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Adreça</Label>
                        <Input value={this.state.address} onChange={this.handleInputChange} type="text" name="address" id="exampleAddress" placeholder="Carrer, num, pis, porta" />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">Ciutat</Label>
                                <Input value={this.state.ciutat} onChange={this.handleInputChange} type="text" name="ciutat" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleComarca">Comarca</Label>
                                <Input value={this.state.comarca} onChange={this.handleInputChange} type="text" name="comarca" id="exampleComarca" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleCpostal">Codi postal</Label>
                                <Input value={this.state.cpostal} onChange={this.handleInputChange} type="text" name="cpostal" id="exampleCpostal" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Input value={this.state.accepto} onChange={this.handleInputChange} type="checkbox" name="accepto" id="exampleCheck" />
                        <Label for="exampleCheck" check>Accepto condicions</Label>
                    </FormGroup>
                    <br />
                    <Button>Registrar</Button>
                </Form>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} charCode="A">Registro OK!</ModalHeader>
                    <ModalBody>
                        Nom: {this.state.nom}
                        <br />
                        Email: {this.state.email}

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Sortir</Button>
                    </ModalFooter>
                </Modal>

            </Container>
        );
    }
}