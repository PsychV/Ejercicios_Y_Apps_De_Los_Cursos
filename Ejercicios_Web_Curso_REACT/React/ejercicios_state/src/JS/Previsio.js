import React from 'react';

export default class Previsio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

        this.getPrevisio = this.getPrevisio.bind(this);
        this.getPrevisio();
    }

    getPrevisio(){
        const ciutat = "barcelona,es";
        const apiKey = "84dbcf8c3480649bce9d4bb58da44b4e";
        const funcio = "forecast";
        const apiUrl = `http://api.openweathermap.org/data/2.5/${funcio}?q=${ciutat}&APPID=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState( data ))
            .catch(error => console.log(error));
    }

    render() {

        if (!this.state.list.length) {
            return <h1>Cargando datos...</h1>
        }

        let fecha = new Date(this.state.list[0].dt * 1000);
        let fecha2 = new Date(this.state.list[1].dt * 1000);

        return (
            <>
            <h3>Previsión para {fecha.toString()}</h3>
            <h3>Temperatura {this.state.list[0].main.temp}</h3>
     
            <h3>Previsión para {fecha2.toString()}</h3>
            <h3>Temperatura {this.state.list[1].main.temp}</h3>
     
            </>
        );
    }
}
