import React from "./node_modules/react";
import "./css/Cuadrado.css";
// usando style para comprender mejor y testear
export default (props) => (
  <>
    <div className="Cuadrado" style={{padding: props.crecer}}></div>
  </>
);
