import { Component } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-processo-seletivo',
  templateUrl: './cadastro-processo-seletivo.component.html',
  styleUrls: ['./cadastro-processo-seletivo.component.css']
})
export class CadastroProcessoSeletivoComponent {
  constructor(private router: Router) { }
  idNewProcesso : number = 0
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
    var instance = this
    axios(config)
      .then(function (response) {
        console.log(response.data);
        instance.idNewProcesso = response.data
        alert("Cadastro concluído!");
        instance.createFaseInscrição()
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }

  createFaseInscrição(){
    let date = new Date().toDateString()
    console.log(date)
    var data = JSON.stringify({
      titulo : "Inscrição",
      tipo : false,
      data :(document.getElementById("inicio") as HTMLInputElement).value + "T14:04:21.034Z",
      descricao : "Fase de inscrção do processo seletivo",
      local :"Online",
      endereco : "Online",
      processo_Id : this.idNewProcesso,
      atual : true
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7049/Fase/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    var instance = this

    axios(config)
      .then(function (response) {
        instance.router.navigate(["/tabela-processo-seletivo/",instance.idNewProcesso])
      })
      .catch(function (error) {
        alert("Não foi possivel criar a primeira fase do processo")
        console.log(error.response.data);
      });
   
  }
}
