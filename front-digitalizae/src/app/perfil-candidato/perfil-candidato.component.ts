import { Component } from '@angular/core';
import axios from 'axios';
import { Candidato } from '../Classes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.css']
})
export class PerfilCandidatoComponent {

  constructor(private router: Router) { }
  
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
  
  ngOnInit(): void {
    
    var id = localStorage.getItem("idcandidato")

    if (id == "0"){
      this.router.navigate(['/login'])
    }

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
