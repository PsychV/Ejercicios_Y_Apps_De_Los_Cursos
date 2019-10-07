/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";

import Alerta from "../Alerta/Alerta";
import { alertActions } from "../../../actions/";
import { API } from "../../config/Config";

import "./Registro.css";
import { connect } from "react-redux";

class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      password: "",
      confirmPassword: "",
      userName: "",
      userEmail: "",
      isMatching: false,
      isPasswordDifferent: false,
      isAnyCampEmpty: false
    };

    this.initialState = this.state = {
      password: "",
      confirmPassword: "",
      userName: "",
      userEmail: "",
      isMatching: false,
      isPasswordDifferent: false,
      isAnyCampEmpty: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alerta = this.alerta.bind(this);
  }

  confirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  inputPassword = event => {
    this.setState({ password: event.target.value });
  };

  inputName = event => {
    this.setState({ userName: event.target.value });
  };

  userMail = event => {
    this.setState({ userEmail: event.target.value });
  };

  handleSubmit(event) {
    //funcio que es farà servir per fer el sumbit del registre a la base de dades
    event.preventDefault();

    const { password, confirmPassword, userEmail, userName } = this.state;

    let usuari = {
      Usuario: this.state.userName,
      Mail: this.state.userEmail,
      Password: this.state.password
    };

    if (
      password.length &&
      confirmPassword.length &&
      userEmail.length &&
      userName.length
    ) {
      const matches = password === confirmPassword;

      if (matches) {
        console.log("si");

        fetch(API + "/usuarios/registre", {
          method: "POST",
          headers: new Headers({ "Content-type": "application/json" }),
          body: JSON.stringify(usuari)
        })
          .then(res => res.json())
          .then(res => {
            if (res.ok === false) {
              throw "ERROR REGISTRO USUARIO";
            } else {
              console.log("USUARIO REGISTRADO");
              this.alerta();
              <Alerta alertColor="danger" alertMessage="Registrado!" />;

              this.setState(prevState => ({
                modal: !prevState.modal,
                isMatching: true
              }));
            }
          })
          .catch(err => console.log(err));
      } else {
        //si la password es diferente
        this.setState({
          isPasswordDifferent: true
        });
      }
    } else {
      //si hay un campo vacío en el registro
      this.setState({
        isAnyCampEmpty: true
      });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.setState(this.initialState);
  }
  alerta() {
    <Alerta alertColor="success" alertMessage="Registrado!" />;
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    const { isPasswordDifferent, isAnyCampEmpty, isMatching } = this.state;
    let displayAlert;

    if (isPasswordDifferent) {
      displayAlert = (
        <Alerta alertColor="danger" alertMessage="La password no coincide" />
      );
    } else if (isAnyCampEmpty) {
      displayAlert = <Alerta alertColor="danger" alertMessage="Campo Vacío" />;
    } else if (isMatching) {
      displayAlert = <Alerta alertColor="danger" alertMessage="Registrado!" />;
    }

    return (
      <div>
        <Button className="BotonAccion" color="danger" onClick={this.toggle}>
          {this.props.Texto}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Registro
            {displayAlert}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="nombre">Nombre de Usuario</Label>
                <Input
                  type="text"
                  name="nombreUsario"
                  id="nombreUsuario"
                  placeholder="Nombre"
                  onChange={this.inputName}
                />
                <FormGroup />
                <FormGroup>
                  {" "}
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="emailUsuario"
                    id="emailUsuario"
                    placeholder="Email"
                    onChange={this.userMail}
                  />
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="UserPassword">Contraseña</Label>
                      <Input
                        type="password"
                        name="UserPassword"
                        id="UserPassword"
                        placeholder="Contraseña"
                        onChange={this.inputPassword}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      {" "}
                      <Label for="UserPassword">Confirma contraseña</Label>
                      <Input
                        type="password"
                        name="ConfirmPassword"
                        id="ConfirmPassword"
                        placeholder="Confirma contraseña"
                        onChange={this.confirmPassword}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>

              <ModalFooter>
                <Button color="primary" type="sumbit">
                  Registrar
                </Button>
                <Button color="primary" onClick={this.toggle}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(null)(Registro);
