import { Component } from '@angular/core';
import axios from 'axios';
import { Candidato } from '../Classes';
@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.css']
})
export class PerfilCandidatoComponent {

  candidato : Candidato = {
    id : 1,
    nome: "string",
    dataNascimento: new Date("1900-01-01"),
    telefone : "string",
    email : "string",
    curriculo : "string",
    nomeProcesso : "string",
    login: "string",
    senha: "string",
    ativo : false,
  }
  
  ngOnInit(): void {
    var id = "4"
    var config = {
      method: 'get',
      url: 'http://localhost:5164/CandidatoxProcesso/GetWithInfo/'+id,
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        instance.candidato = response.data
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

}
