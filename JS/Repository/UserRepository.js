import axios from "axios"

export class UserRepository{
    api_url = "http://192.168.0.141/api/";
    api;
    constructor(){
        this.api = axios.create({baseURL:this.api_url});
    }
    create(model){
        this.api.post("User",model).then( r => {
            if(r.status = 200){
                console.log("Cadastrado com sucesso");
            } else{
                console.log("Houve um erro durante o cadastro");
            }
        });
    }
    async read(){
        return (await this.api.get("User").then()).data
    }
    read_by_id(id){
        return (await this.api.get(`User/${id}`).then()).data
    }
    update(model){
        this.api.put(`User/${model.id}`,model).then( r => {
            if(r.status = 200){
                console.log("Cadastro editado com sucesso");
            } else{
                console.log("Houve um erro durante a edição do cadastro");
            }
        });
    }
    delete(id){
        this.api.delete(`User/${id}`).then( r => {
            if(r.status = 200){
                console.log("Cadastro deletado com sucesso");
            } else{
                console.log("Houve um erro durante a exclusão do cadastro");
            }
        });
    }
}