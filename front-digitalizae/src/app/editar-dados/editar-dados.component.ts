import { Component } from '@angular/core';
import axios from 'axios';
import { Candidato } from '../Classes';
@Component({
  selector: 'app-editar-dados',
  templateUrl: './editar-dados.component.html',
  styleUrls: ['./editar-dados.component.css']
})
export class EditarDadosComponent {

  candidato : Candidato = {
    id : 1,
    nome: "string",
    dataNascimento: new Date("1900-01-01"),
    telefone : "string",
    email : "string",
    caminhoFt : "string",
    CPF : "string",
    nomeProcesso : "string",
    login: "string",
    senha: "string",
    ativo : false,
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
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
