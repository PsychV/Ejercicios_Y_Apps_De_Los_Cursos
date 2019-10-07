import React from "./node_modules/react";
import "./css/CuadradoB.css";
export default (props) => (
  <>
    <div className="CuadradoB" style={{
      backgroundColor: props.color,
      height: props.talla,
      width: props.talla,
      margin: props.margen,
      border: props.grosor,
    }}>
    </div>


  </>
);
