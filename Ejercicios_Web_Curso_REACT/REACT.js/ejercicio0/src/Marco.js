import React from "./node_modules/react";
export default (props) => (
  <>
<img className="Marco" src="http://placekitten.com/200/300" style={{
    border: `${props.color} 3px solid`, padding: props.borde, backgroundColor: props.fondo
}}></img>
  </>
);
