import React from 'react';

export default class Llista extends React.Component {
    render() {
        let i = 1;
        let tasques = this.props.tasques.map(todo => <Itemlist key={todo.id} esborra={this.props.esborra} tasca={todo} />)
        return (
            <div>
                {tasques}
            </div>
        );
    }
}


class Itemlist extends React.Component {

    render() {
        let clase;
        switch (this.props.tasca.tipus) {
            case "Personal":
                clase = "alert alert-primary";
                break;
            case "Familia":
                clase = "alert alert-danger";
                break;
            case "Trabajo":
                clase = "alert alert-success";
                break;
            case "Urgente":
                clase = "alert alert-secondary";
                break;
            default:
                break;
        }

        return (
            <div className={clase} role="alert">
                {this.props.tasca.text}
                <button type="button" className="close"
                    onClick={()=>this.props.esborra(this.props.tasca)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
