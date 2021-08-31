import React, { Component } from 'react';

class Person extends Component {
   id;
   nome;
   sobrenome;

   constructor(props){
       super(props);
      this.model = props.model;
      this.listSobrenome = props.listSobrenome;
   }
    

  handlerSalvar(event){
      let pessoa = {};
      pessoa={"id":event.target.id.value,"nome":event.target.nome.value,"sobrenome":event.target.sobrenome.value}
      event.stopPropagation();
      event.preventDefault();
      this.props.create(pessoa);
      document.getElementById("sobrenome").value = document.getElementById("sobre").value;
  }
    render() { 
        return ( 
            <form onSubmit={this.handlerSalvar.bind(this)}>
            <label>Id</label>
            <input 
            type="text" 
            id="id" 
            name="id" 
            placeholder="Digite o Id"   
            />
            <br />  
            <label>Nome</label>
            <input 
            type="text" 
            id="nome" 
            name="nome" 
            placeholder="Digite seu nome" 
           
            /> 
            <br />  
            <label>Sobrenome</label>
            <select 
            name="sobrenome" 
            id="sobrenome"
            defaultValue={`Default`}
            >
                <option id="sobre" value="Default" disabled>Selecione o Sobrenome!</option>
                {this.listSobrenome.map((c,i)=>{
                    return (
                        <option key={i} value={c.sobrenome}>{c.sobrenome}</option>
                        )
                    }
                )}
            </select> 
            <br />  
            <input type="submit" value="Salvar"/> 
        </form>
             );
    }
}
 
export default Person;