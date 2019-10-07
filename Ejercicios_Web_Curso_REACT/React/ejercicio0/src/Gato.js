import React from "./node_modules/react";
import "./css/Gato.css";
export default (props) => (
  <>
<img className="Gato" src={`http://placekitten.com/${props.ancho}/${props.alto}`}></img>
<div className="Gato" style={{ height: props.alto / 10, width: props.ancho }}>
<p className="Gato">{props.nombre}</p>
  </div>
  </>
);
