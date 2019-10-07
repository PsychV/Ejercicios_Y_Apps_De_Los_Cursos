import React from "./node_modules/react";
import "./css/BolaX.css";
export default (props) => (
  <>
    <div className="BolaX" style={{
      backgroundColor: props.fondo,
      height: props.talla,
      width: props.talla,
      margin: props.margen,
    }}>
    </div>


  </>
);
