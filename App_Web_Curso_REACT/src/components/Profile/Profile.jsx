import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  UncontrolledTooltip, Form
} from "reactstrap";
import Switch from "../Switch/Switch";
import Header from "../Header/Header";

import Location from "../Location/Location";
import { API } from "../../config/Config";

import { connect } from "react-redux";
import axios from 'axios';
import "./Profile.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: "Victor",
      nameWasClicked: false,

      lastNameText: "Tepes",
      lastNameWasClicked: false,

      mailText: "ejemplo@hiboru.com",
      mailWasClicked: false,

      userText: "usuarioFalso123@",


      imgText: "http://placekitten.com/100/100",

      userInterests: ["Salsa", "Videojuegos"],
      temporalClickInterest: "",
      selectedFile: false,
      createdAt: ""
    };

    this.mailWasClicked = this.mailWasClicked.bind(this);
    this.updateMail = this.updateMail.bind(this);
    this.handleKeyIntroMail = this.handleKeyIntroMail.bind(this);

    this.nameWasClicked = this.nameWasClicked.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleKeyIntroName = this.handleKeyIntroName.bind(this);

    this.lastNameWasClicked = this.lastNameWasClicked.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.handleKeyIntroLastName = this.handleKeyIntroLastName.bind(this);

    this.clickInterest = this.clickInterest.bind(this);
    this.afterSetStateFinished = this.afterSetStateFinished.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let userToken = {
      token: this.props.userToken
    };

    console.log(this.props.userToken + "token");
    fetch(API + "/usuarios/VerPerfil", {
      method: "POST",
      headers: new Headers({ "Content-type": "application/json" }),
      body: JSON.stringify(userToken)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          nameText: data.data.Nombre,
          lastNameText: data.data.Apellido,
          mailText: data.data.Mail,
          userText: data.data.Usuario,
          imgText: data.data.Img,
          createdAt: data.data.createdAt
        });
        console.log(data);
      });
  }

  categoriesCreatorImpar(el) {
    return (
      <>
        {el.Id % 2 !== 0 ? ( // isGrupCategoryUneven ?
          <>
            <h5 className="tituloIntereses">{el.GrupoCategorias}</h5>
            <>{this.subCategoriesLoader(el.GrupoCategorias)}</>
          </>
        ) : (
            <></>
          )}
      </>
    );
  }

  categoriesCreatorPar(el) {
    return (
      <>
        {el.Id % 2 === 0 ? ( // isGrupCategoryUneven ?
          <>
            <h5 className="tituloIntereses">{el.GrupoCategorias}</h5>
            <>{this.subCategoriesLoader(el.GrupoCategorias)}</>
          </>
        ) : (
            <></>
          )}
      </>
    );
  }

  subCategoriesLoader(GrupoCategoriaActual) {
    return this.props.categorias
      .filter(el => el.GrupoCategorias === GrupoCategoriaActual)
      .map(el => this.subCategoriesCreator(el));
  }

  subCategoriesCreator(el) {
    return (
      <ListGroupItem
        key={el.Id}
        className="clickableInterest"
        onClick={this.clickInterest}
        color={
          !!~this.state.userInterests.indexOf(el.Nombre) ? "primary" : "dark"
          /* !!~ convierte los resultados de idexOf en true o false */
        }
      >
        {el.Nombre}
      </ListGroupItem>
    );
  }
  clickInterest() {
    this.setState({
      temporalClickInterest: event.target.innerHTML,
    }, () => {
      this.afterSetStateFinished();
    });
  }

  afterSetStateFinished() {
    if (!!~this.state.userInterests.indexOf(this.state.temporalClickInterest)) {
      this.setState({
        userInterests: this.state.userInterests.filter(el => el !== this.state.temporalClickInterest)
      });
    } else {
      this.setState({
        userInterests: this.state.userInterests.concat(this.state.temporalClickInterest)
      });
    }
  }


  mailWasClicked() {
    this.setState({
      mailWasClicked: !this.state.mailWasClicked
    });
    // console.log(this.state.mailWasClicked);
  }
  updateMail(event) {
    this.setState({
      mailText: event.target.value
    });
    console.log(this.state.mailText + "mail");
  }
  handleKeyIntroMail(e) {
    if (e.key === "Enter") {
      this.mailWasClicked();
    }
  }


  nameWasClicked() {
    this.setState({
      nameWasClicked: !this.state.nameWasClicked
    });
  }
  updateName(event) {
    this.setState({
      nameText: event.target.value
    });
  }
  handleKeyIntroName(e) {
    if (e.key === "Enter") {
      this.nameWasClicked();
    }
  }


  lastNameWasClicked() {
    this.setState({
      lastNameWasClicked: !this.state.lastNameWasClicked
    });
  }
  updateLastName(event) {
    this.setState({
      lastNameText: event.target.value
    });
  }
  handleKeyIntroLastName(e) {
    if (e.key === "Enter") {
      this.lastNameWasClicked();
    }
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  handleSubmit(event) {
    console.log(this.state.nameText);
    event.preventDefault();
    const data = new FormData();
    data.append('token', this.props.userToken);
    data.append('Nombre', this.state.nameText);
    data.append('Apellido', this.state.lastNameText);
    data.append('Mail', this.state.mailText);
    data.append('file', this.state.selectedFile);
    axios.post(API + "/usuarios/EditarPerfil", data)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {

    let loadCategoriesImpar = this.props.grupoCategorias.map(el =>
      this.categoriesCreatorImpar(el)
    );

    let loadCategoriesPar = this.props.grupoCategorias.map(el =>
      this.categoriesCreatorPar(el)
    );

    let isMailEditModeOn = this.state.mailWasClicked;
    let isNameEditModeOn = this.state.nameWasClicked;
    let isLastNameEditModeOn = this.state.lastNameWasClicked;

    return (
      <>
        <Header usuario={this.props.usuario} buscador={false} />
        <Container>
          <CardBody className="Profile-Card">
            <Row>
              <Col md="8">
                <Row>
                  <Col md="12">
                    <>
                      {isNameEditModeOn ? (
                        <>
                          <Input
                            className="Visible"
                            type="text"
                            value={this.state.nameText}
                            onChange={this.updateName}
                            onKeyPress={this.handleKeyIntroName}
                            id="UncontrolledTooltipWriteName"
                          />
                          <UncontrolledTooltip
                            placement="right"
                            target="UncontrolledTooltipWriteName"
                          >
                            Pulsa Enter
                          </UncontrolledTooltip>
                        </>
                      ) : (
                          <h4 onClick={this.nameWasClicked}
                            className="Profile_Mail clickableText"
                          >{this.state.nameText}</h4>
                        )}
                    </>
                    <>
                      {isLastNameEditModeOn ? (
                        <>
                          <Input
                            className="Visible"
                            type="text"
                            value={this.state.lastNameText}
                            onChange={this.updateLastName}
                            onKeyPress={this.handleKeyIntroLastName}
                            id="UncontrolledTooltipWriteLastName"
                          />
                          <UncontrolledTooltip
                            placement="right"
                            target="UncontrolledTooltipWriteLastName"
                          >
                            Pulsa Enter
                          </UncontrolledTooltip>
                        </>
                      ) : (
                          <h4 onClick={this.lastNameWasClicked}
                            className="Profile_Mail clickableText"
                          >{this.state.lastNameText}</h4>
                        )}
                    </>
                    <hr className="Profile" />{" "}
                  </Col>
                  <Col md="4">
                    {/* <h6>Localización por defecto:</h6>
                    <Location /> */}
                  </Col>
                  <Col md="4">
                    <h6>Miembro de ApropMeu desde:</h6>
                    <p>{this.state.createdAt}</p>
                  </Col>
                  <Col md="4">
                    <h6>Correo electrónico:</h6>
                    <>
                      {isMailEditModeOn ? (
                        <>
                          <Input
                            className="Visible"
                            type="text"
                            value={this.state.mailText}
                            onChange={this.updateMail}
                            onKeyPress={this.handleKeyIntroMail}
                            id="UncontrolledTooltipEscribeMail"
                          />
                          <UncontrolledTooltip
                            placement="right"
                            target="UncontrolledTooltipEscribeMail"
                          >
                            Pulsa Enter
                          </UncontrolledTooltip>
                        </>
                      ) : (
                          <p
                            onClick={this.mailWasClicked}
                            className="Profile_Mail clickableText"
                          >
                            {this.state.mailText}
                          </p>
                        )}
                    </>
                  </Col>
                  <Col med="12">
                    <h3>Intereses</h3>
                    <hr className="Profile" />
                    <Row>
                      <Col md="6">
                        <ListGroup>{loadCategoriesImpar}</ListGroup>
                      </Col>
                      <Col md="6">
                        <ListGroup>{loadCategoriesPar}</ListGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md="4">

                <img
                  src={"http://localhost:3000/img/" + this.state.imgText}
                  alt="Foto Usuario"
                  className="ImgPerfilGrande Center"
                />
                <Input type="file" name="file" onChange={this.onChangeHandler} id="nombreFoto" />
                <h4 className="Center Profile">
                  <p
                    className="Profile_Mail"
                  >
                    {this.state.userText}
                  </p>
                </h4>
                <hr className="Profile" />
                <Form onSubmit={this.handleSubmit}>
                  <Button color="primary" type="submit" className="button">
                    Guardar
                  </Button>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.usuario
  };
};

export default connect(mapStateToProps)(Profile);
