import React, { Component } from 'react';
import Person from './components/person-form/person';
import Personlist from './components/person-list/personlist';
import Sobreform from './components/sobre-form/sobreform';
import Sobrelist from './components/sobre-list/sobrelist';


class App extends Component {
    list = [];
    listSobrenome = [];
    model;
    constructor(){
        super()
        this.state = {
            list : this.list,
            listSobrenome : this.listSobrenome,
            model : this.model
        }
    }
    createSobre(model)
    {
        this.listSobrenome.push(model);
        this.setState({
        listSobrenome : this.listSobrenome
        })
    }
    create(model){
        if (this.list.find(x => x.id === model.id) == null)
        {
            this.list.push(model);
            this.setState({
            list : this.list
        })
        }
        else
        {
           this.editarSalvar(model.id);
           this.setState({
            list : this.list
        })
        }
        this.limparCampos();
    }
    Deletar(id)
    {
        let excluirId =this.list.findIndex(c => c.id === id);
        this.list.splice(excluirId, 1);
        this.setState({
            list : this.list
        })
    }
    DeletarSobre(id)
    {
        let excluirId =this.listSobrenome.findIndex(c => c.id === id);
        this.listSobrenome.splice(excluirId, 1);
        this.setState({
            listSobrenome : this.listSobrenome
        })
    }
    editar(id)
    {
        let model = this.list.find(c => c.id === id);
        document.getElementById("id").value = model.id;
        document.getElementById("nome").value = model.nome;
        document.getElementById("sobrenome").value = model.sobrenome;
    }
    editarSalvar(id)
    {
        let model = this.list.find(c => c.id === id);
        model.nome = document.getElementById("nome").value;
        model.sobrenome = document.getElementById("sobrenome").value;
    }
    limparCampos()
    {
        document.getElementById("id").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
       
    }
    render() { 
        return ( 
            <section>
                <h1>welcome</h1>
                <Person create={this.create.bind(this)} model={this.state.model} listSobrenome={this.state.listSobrenome}/>
                <Personlist list={this.state.list} Deletar={this.Deletar.bind(this)} editar={this.editar.bind(this)}/>
                <Sobreform createSobre={this.createSobre.bind(this)} model={this.state.model}/>
                <Sobrelist listSobrenome={this.state.listSobrenome} DeletarSobre={this.DeletarSobre.bind(this)}/>
            </section>
         );
    }
}
 
export default App;