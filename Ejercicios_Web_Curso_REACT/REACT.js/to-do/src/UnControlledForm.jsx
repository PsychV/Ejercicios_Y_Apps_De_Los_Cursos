import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class UnControlledForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalNom: "",
            modalCiutat: "",
            modalCpostal: "",
        }

        this.refNom = React.createRef();
        this.refCiutat = React.createRef();
        this.refCpostal = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.focusCiutat = this.focusCiutat.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    focusCiutat(){
        this.refCiutat.current.focus();
    }



      handleSubmit(e){
          e.preventDefault();

          this.setState({
            modalNom: this.refNom.current.value,
            modalCiutat: this.refCiutat.current.value,
            modalCpostal: this.refCpostal.current.value,
            modal: true,
        });

      }

    render() {


        return (
            <Container>
                <br />
                <br />
                <h1>UnControlled</h1>
                <Form onSubmit={this.handleSubmit} >
                   
                    <FormGroup>
                        <Label for="exampleNom">Nom complet</Label>
                        <input  className="form-control" ref={this.refNom} required  type="text" name="nom" id="exampleNom" placeholder="nom..." />
                    </FormGroup>
                 
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">Ciutat</Label>
                                <input className="form-control" ref={this.refCiutat}   type="text" name="ciutat" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCpostal">Codi postal</Label>
                                <input className="form-control" ref={this.refCpostal}   type="text" name="cpostal" id="exampleCpostal" />
                            </FormGroup>
                        </Col>
                       
                       
                    </Row>
                   
                    <br />
                    <Button>Registrar</Button>
                </Form>

                <Button onClick={this.focusCiutat}>Enfoca Ciutat</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} charCode="X">Registro OK!</ModalHeader>
                <ModalBody>
                    Nom: {this.state.modalNom}
                    <br />
                    Ciutat: {this.state.modalCiutat}
                    <br />
                    CPostal: {this.state.modalCpostal}
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Sortir</Button>
                </ModalFooter>
                </Modal>

            </Container>
        );
    }
}