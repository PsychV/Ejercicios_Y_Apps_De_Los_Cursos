import React, { Component } from 'react'
import { CIUTATS_CAT_20K } from "./datos.js";


export default class Combo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Comarca: "", Pueblo: "" };
        this.CambiarComarca = this.CambiarComarca.bind(this);
        this.CambiarPueblo = this.CambiarPueblo.bind(this);
        // Asociamos una variable con una funcion
    }

    CambiarComarca(event) {
        this.setState({ Comarca: event.target.value });
     // Cambia el valor Comarca: Aqui indica la Localizacion del nuevo valor.
    // event por el evento, target por el elemento ej <select>, value= el valor de la var
    }
    CambiarPueblo(event) {
        this.setState({ Pueblo: event.target.value });
    }
    render() {

        let ListComarca = CIUTATS_CAT_20K.map(el => el.comarca);
        // Filtramos para obtener un solo, las comarcas (todas). 
        ListComarca = [...new Set(ListComarca)].map(el => <option key={el}>{el}</option>);
        // Eliminamos las comarcas repetidas    y Creamos una option por cada elemento (comarca)
        let ListFiltroComarca = CIUTATS_CAT_20K.filter(el => el.comarca.includes(this.state.Comarca)).map(el => el.municipi).map(el => <option key={el}>{el}</option>);
        //                                                                     Aqui introducimos la comarca elegida en el primer selector. Creamos municipios filtrados.      
        return (
            <>
                <select value={this.state.Comarca} onChange={this.CambiarComarca}>
                    {ListComarca}
                </select>
                <select value={this.state.Pueblo} onChange={this.CambiarPueblo}>
                    {ListFiltroComarca}
                </select>
                <h3>{this.state.Pueblo}</h3>
            </>
        )
    }
}