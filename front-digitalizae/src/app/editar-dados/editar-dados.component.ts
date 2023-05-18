import { Component } from '@angular/core';
import axios from 'axios';
import { Candidato, Processo } from '../Classes';
@Component({
  selector: 'app-editar-dados',
  templateUrl: './editar-dados.component.html',
  styleUrls: ['./editar-dados.component.css']
})
export class EditarDadosComponent {

  selectedDate : string ='';

  candidato : Candidato = {
    id : 1,
    nome: "string",
    dataNascimento: new Date("1900-01-01"),
    telefone : "string",
    email : "string",
    caminhoFt : "string",
    cpf : "string",
    nomeProcesso : "string",
    login: "string",
    senha: "string",
    ativo : false,
  }

  processo : Processo ={
      id:0,
      nome : "string",
      dataInicio: "string",
      dataFim: "string",
      ativo : true,
      qtdeMax : 123
  }
  

  ngOnInit(): void {

    var id = localStorage.getItem("idcandidato")
    var config = {
      method: 'get',
      url: 'https://localhost:7049/Candidato/Perfil/'+id,
      headers: { },
    };


    var instance = this
    axios(config)
      .then(function (response) {
        instance.candidato = response.data
        console.log(response.data)
        console.log(instance.candidato.cpf)
      })
      .catch(function (error) {
        console.log(error);
      });

    let dateObject = new Date(this.candidato.dataNascimento)
    this.selectedDate = dateObject.toISOString().substr(0, 10);

    var url = "https://localhost:7049/GetProcessoCandidato/"+id

    var config = {
      method: 'get',
      url: url,
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        instance.processo = response.data
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  editarCandidato(){
    var id = localStorage.getItem("idcandidato")

    
    this.candidato.nome = (document.getElementById("nome") as HTMLInputElement).value;
    this.candidato.dataNascimento = new Date((document.getElementById("nascimento") as HTMLInputElement).value);
    this.candidato.telefone = (document.getElementById("telefone") as HTMLInputElement).value;
    this.candidato.email = (document.getElementById("email") as HTMLInputElement).value;
    let login = (document.getElementById("login") as HTMLInputElement).value;
    let senha = (document.getElementById("senha") as HTMLInputElement).value;
    let cpf = (document.getElementById("cpf") as HTMLInputElement).value;

    const url = 'https://localhost:7049/Candidato/PerfilEdit/'+id

    try{
      const response = axios.put(url,this.candidato)
      console.log(response)
    }catch{
      throw console.error();
      
    }
   
  }
}
