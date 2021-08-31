import {Component} from 'react'

class Sobreform extends Component 
{
    id;
    sobrenome;

    constructor(props){
        super(props);
       this.model = props.model;
    }
    handleInputSobrenome(event){
        this.sobrenome = event.target.value;
        if (event.key === 'Enter')
        {
            let sobrenome = {"id":this.id,"sobrenome":this.sobrenome}
            event.stopPropagation();
            event.preventDefault();
            this.props.createSobre(sobrenome);
            document.getElementById("sobrenome").value = document.getElementById("sobre").value;
           
        }
    }
    render() { 
      
        return ( 
            <form>
                <input id="sobre" onKeyDown={this.handleInputSobrenome.bind(this)} type="select" placeholder='Digite seu sobrenome'/>
            </form>
        )
    }
}
export default Sobreform;