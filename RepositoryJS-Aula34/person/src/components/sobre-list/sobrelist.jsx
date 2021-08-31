import { Component } from "react";
import {ReactComponent as DeleteRvg} from "../../assets/img/delete.svg"


class Sobrelist extends Component{
    constructor(props){
        super(props)
        this.listSobrenome = props.listSobrenome
    }
    render() { 
        return (
                <table>
                    <thead>
                        <tr>
                            <th>Sobrenome</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.listSobrenome.map( (c,i) =>{
                            return(
                                <tr key={i}>
                                    <td>{c.sobrenome}</td>
                                    <td>
                                    <DeleteRvg  onClick={this.props.DeletarSobre.bind(this, c.id)}/>
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

export default Sobrelist;