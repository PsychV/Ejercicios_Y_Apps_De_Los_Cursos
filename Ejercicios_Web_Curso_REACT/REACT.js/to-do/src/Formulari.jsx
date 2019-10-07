import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';

export default class Formulari extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tasca: '',
            tipusTasca: 'Personal'
        }
        this.enviaForm = this.enviaForm.bind(this);
        this.canviTasca = this.canviTasca.bind(this);
        this.canviTipus = this.canviTipus.bind(this);
    }
    canviTipus(event){
        this.setState({tipusTasca: event.target.value});
    }

    canviTasca(event){
        this.setState({tasca: event.target.value});
    }

    enviaForm(event) {
        event.preventDefault();

        this.props.novaTasca(this.state.tasca, this.state.tipusTasca);
        this.setState({
            tasca: ''
        })
    }

    render(){
        let i = 1;
        return(
            <form onSubmit={this.enviaForm}>
                <div className="form-group">
                    <label>Tasca</label>
                    <input type="text" value={this.state.tasca} className="form-control"  onChange={this.canviTasca} />
                </div>
                <FormGroup>
                    <Label for="exampleSelect">Tipo de tarea</Label>
                    <Input type="select" name="select" id="exampleSelect" value={this.state.tipusTasca} onChange={this.canviTipus}>
                        <option value="Personal">Personal</option>
                        <option value="Trabajo">Trabajo</option>
                        <option value="Urgente">Urgente</option>
                        <option value="Familia">Familia</option>
                
                    </Input>
                </FormGroup>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        );
    }
}

