import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-cadastro-processo-seletivo',
  templateUrl: './cadastro-processo-seletivo.component.html',
  styleUrls: ['./cadastro-processo-seletivo.component.css']
})
export class CadastroProcessoSeletivoComponent {
  constructor() { }

  ngOnInit(): void {

  }

  ProcessoRegister() {
    let curso = (document.getElementById("curso") as HTMLInputElement).value;
    let inicio = (document.getElementById("inicio") as HTMLInputElement).value;
    let fim = (document.getElementById("fim") as HTMLInputElement).value;
    let numcandidatos = (document.getElementById("numcandidatos") as HTMLInputElement).value;

    var data = JSON.stringify({
      nome: curso,
      adm_id : 1,
      dataInicio: inicio+"T00:00:00.000Z",
      dataFim: fim+"T00:00:00.000Z",
      qtdeMax: numcandidatos,
      ativo : false,
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7049/Processo/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Cadastro concluído!");
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }
}
