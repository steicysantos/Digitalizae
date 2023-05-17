import { Component } from '@angular/core';
import { Candidato, Fase } from '../Classes';
import axios from "axios";
@Component({
  selector: 'app-visualiza-fase',
  templateUrl: './visualiza-fase.component.html',
  styleUrls: ['./visualiza-fase.component.css']
})
export class VisualizaFaseComponent {
  progresso : Array<Number> =[]
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

    this.progresso.push(1)
    this.progresso.push(1)
    this.progresso.push(1)
    this.progresso.push(1)
  //   var id = "4"
  //   var config = {
  //     method: 'get',
  //     url: 'http://localhost:5164/CadastroCandidato/GetCandiato/'+id,
  //     headers: { },
  //   };

  //   var instance = this
  //   axios(config)
  //     .then(function (response) {
  //       instance.candidato = response.data
  //       const date = new Date(instance.candidato.DataNascimento.toString())
  //       instance.candidato.DataNascimento = date
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  }
}
