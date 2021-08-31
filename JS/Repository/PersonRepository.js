import axios from "axios"
import { Person } from "../Models/Person.js";

export class PersonRepository{
    api_url = "http://192.168.0.141/api/";
    api;
    constructor(){
        this.api = axios.create({baseURL:this.api_url});
    }
    create(model){
        this.api.post("Person",model).then( r => {
            if(r.status = 200){
                console.log("Cadastrado com sucesso");
            } else{
                console.log("Houve um erro durante o cadastro");
            }
        });
    }
    async read(){
        return (await this.api.get("Person").then()).data
    }
    async read_by_id(id){
        return (await this.api.get(`Person/${id}`).then()).data
    }
    update(model){
        this.api.put(`Person/${model.id}`,model).then( r => {
            if(r.status = 200){
                console.log("Cadastro editado com sucesso");
            } else{
                console.log("Houve um erro durante a edição do cadastro");
            }
        });
    }
    delete(id){
        this.api.delete(`Person/${id}`).then( r => {
            if(r.status = 200){
                console.log("Cadastro deletado com sucesso");
            } else{
                console.log("Houve um erro durante a exclusão do cadastro");
            }
        });
    }
}