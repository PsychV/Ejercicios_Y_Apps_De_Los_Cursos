import React from 'react';
import { Container,Table, Col, Row } from 'reactstrap';

export default class Previsio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            error: false
        };

        this.getPrevisio = this.getPrevisio.bind(this);
    }

    componentDidMount() {
        this.getPrevisio();
    }

    getPrevisio() {
        const ciutat = "barcelona,es";
        const apiKey = "84dbcf8c3480649bce9d4bb58da44b4e";
        const funcio = "forecast";
        const apiUrl = `http://api.openweathermap.org/data/2.5/${funcio}?q=${ciutat}&APPID=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({list: data.list}))
            .catch(error => this.setState({error: true}));
    }

    render() {

        
        if (this.state.error) {
            return <h1>Error consultando la API...</h1>
        }


        if (!this.state.list.length) {
            return <h1>Cargando datos...</h1>
        }

        let i = 0;
        let files = this.state.list.map(el => <tr key={i++} ><td>{(new Date(el.dt * 1000)).toLocaleString()}</td><td>{el.main.temp}</td></tr>)

        return (
            <Container>
                <br />
                <br />
                <h2>Previsió a Barcelona</h2>
                <br />

                <Row>
                    <Col xs="6">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Data/hora</th>
                                    <th>Temp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files}
                            </tbody>
                        </Table>

                    </Col>
                </Row>

            </Container>
        );
    }
}
