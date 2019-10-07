import React from "./node_modules/react";
import "./css/Capital.css";
export default (props) => (
  <>
    <p className="Capital1">
        {props.nom[0].toUpperCase()}
    </p>
    <p className="Capital2">
        {props.nom.toUpperCase()[0]+props.nom.slice(1)}
    </p>


  </>
);
