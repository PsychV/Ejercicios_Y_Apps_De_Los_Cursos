import React from "./node_modules/react";
import HolaMundo from "./HolaMundo.js";
import Cuadrado from "./Cuadrado.js";
import Bola from "./Bola.js";
import Separador from "./Separador.js";
import Titulo from "./Titulo.js";
import BolaX from "./BolaX.js"
import CuadradoB from "./CuadradoB.js"
import Capital from "./Capital.js"
import Gato from "./Gato.js"
import BolaBingo from "./BolaBingo.js"
import FotoBolaX from "./FotoBolaX.js"
import Marco from "./Marco.js"
export default () => (
  <>
<HolaMundo />
<Bola crecer="0"/>
<Cuadrado crecer="0" />
<Separador />
<Titulo texto="Hola React!" />
<BolaX talla="80" margen="10" fondo="#ff0000"  />
<CuadradoB talla="70" margen="8" grosor="5px solid black" color="red" />
<Capital nom="barcelona" />
<Gato ancho="200" alto="200" nombre="Garfield" />
<BolaBingo num="22" />
<FotoBolaX src="http://lorempixel.com/200/200" talla="200" />
<Marco src="http://lorempixel.com/200/300" borde="10" color=" brown" fondo="beige" />
</ >
);
/* Me faltan los dos ejercicios con FontAwesome */