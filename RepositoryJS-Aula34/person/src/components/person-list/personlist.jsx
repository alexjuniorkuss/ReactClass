
import { Component } from 'react';
import {ReactComponent as DeleteRvg} from "../../assets/img/delete.svg"

class Personlist extends Component {
        constructor(props){
        super(props)
        this.list = props.list
    }

    render() { 
        return (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list.map( (c,i) =>{
                            return(
                                <tr key={i}>
                                    <td>{c.id}</td>
                                    <td>{c.nome}</td>
                                    <td>{c.sobrenome}</td>
                                    <td>    
                                        <input onClick={this.props.editar.bind(this, c.id)} type="button" value="Editar"/> 
                                        <DeleteRvg onClick={this.props.Deletar.bind(this, c.id)} />
                                        {/* <input onClick={this.props.Deletar.bind(this, c.id)} type="button" value="Deletar"/>  */}
                                    </td>
                                </tr>
                            )
                            }
                        )}
                    </tbody>
                </table>
          );
    }
}
 
export default Personlist;