import React from "./node_modules/react";
export default (props) => (
  <>
<img className="FotoBolaX" src={`http://placekitten.com/${props.talla}/${props.talla}`} 
style={{ height: props.talla, width: props.talla, borderRadius: props.talla/2, margin: 20 }}></img>
  </>
);
//No he usado el enlace de foto propuesto porque lo carga bien, tampoco el navegador normal.