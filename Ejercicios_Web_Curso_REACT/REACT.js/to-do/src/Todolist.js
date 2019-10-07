import React from 'react';
import Formulari from './Formulari';
import Llista from './Llista';


export default class Todolist extends React.Component {
        
    constructor(props){
        super(props);
        this.state = {
            tasques: [],
            index: 1
        }
        this.novaTasca = this.novaTasca.bind(this);
        this.esborraTasca = this.esborraTasca.bind(this);
    }

    esborraTasca(tasca){
 
        let novaLlista = this.state.tasques.filter(todo => todo.id!==tasca.id);
        this.setState({
            tasques: novaLlista
        });
    }

    novaTasca(text, tipus){
        // this.state hauria de ser inmutable
        // si fem un "push" el modifiquem, amb "concat" es torna un nou array
        //  cites:  this.state.cites.concat({dia, tema})
        // la sintaxi següent és alternativa ES6

        var id = this.state.index+1;
        this.setState({
            tasques:  [...this.state.tasques, {id: id, text, tipus}],
            index: id
        });
    }

    render() {
        return (
            <div className="container">
            <br />
            <br />
                <div className="row">
                    <div className="col-6">
                        <Formulari novaTasca={this.novaTasca}  />
                    </div>
                    <div className="col-6 lineleft ">
                         <label>Tasques</label>
                        <Llista  esborra={this.esborraTasca} tasques={this.state.tasques} />
                    </div>
                </div>
            </div>
        )
    }
}
