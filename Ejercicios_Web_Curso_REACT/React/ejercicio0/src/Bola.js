import React from "./node_modules/react";
import "./css/Bola.css";
// usando style para comprender mejor y testear
export default (props) => (
  <>
    <div className="Bola" style={{padding: props.crecer}}></div>
  </>
);
