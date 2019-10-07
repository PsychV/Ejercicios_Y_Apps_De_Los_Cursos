import React, { Component } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { API } from "../../config/Config";
import "./UserLoggedButton.css";

export default class UserLoggedButton extends Component {
  constructor() {
    super();
  }

  userDropdown(UserValidatedToken) {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <img
            src={"http://localhost:3000/img/" + UserValidatedToken.img}
            alt={UserValidatedToken.nomusuari}
            className="ImgPerfil"
          ></img>
          <span> {UserValidatedToken.nomusuari}</span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to={"/listar_eventos"}>
              Ver Lista de Favoritos
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to={"/perfil_Usuario"}>
              Perfil
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to={"/crear_eventos"}>
              Crear Eventos
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to={"/lista_eventos"}>
              Editar tus Eventos
            </Link>
          </DropdownItem>
          <DropdownItem divider />
          {UserValidatedToken.admin ? (
            <DropdownItem>
              <Link to={"/admin_panel"}>Admin Panel</Link>
            </DropdownItem>
          ) : (
            <></>
          )}
          <DropdownItem>Cerrar Sesion</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    let UserValidatedToken = this.props.Usuario;
    // console.log(userOnline[0]); // funciona con el 0,
    //el numero de array hay que vincularlo con la id del usuario, ej [0] con id:1
    let loaduserDropdown = this.userDropdown(UserValidatedToken);

    return <>{loaduserDropdown}</>;
  }
}
