import { Component } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
import { Processo } from '../Classes';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent {
  constructor(private router: Router) { }

  processos : Array<Processo> = []
  selectedProcessoId : number = 0
  newCandidatoId : number = 0

  ngOnInit(): void {
    var url = 'https://localhost:7049/Processo/GetAllActive'

    var config = {
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var instance = this
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        instance.processos = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  CandidatoRegister() {

    let nome = (document.getElementById("nome") as HTMLInputElement).value;
    let nascimento = (document.getElementById("nascimento") as HTMLInputElement).value;
    let telefone = (document.getElementById("telefone") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let login = (document.getElementById("login") as HTMLInputElement).value;
    let senha = (document.getElementById("senha") as HTMLInputElement).value;
    let CPF = (document.getElementById("CPF") as HTMLInputElement).value;

    var data = JSON.stringify({
      nome: nome,
      cpf: CPF,
      login: login,
      senha: senha,
      dataNascimento: nascimento+"T00:00:00.000Z",
      telefone: telefone,
      email: email,
      caminhoFt: email,
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7049/Candidato/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    var instance = this

    if(this.selectedProcessoId == 0){
      alert("Selecione um processo seletivo!")
      return
    }

    axios(config)
      .then(function (response) {
        instance.newCandidatoId = response.data
        instance.registerCandidatoProcesso()
      })
      .catch(function (error) {
        alert("Preencha todos os campos")
        console.log(error);
      });
  }

  registerCandidatoProcesso(){

    var data = JSON.stringify({
      candidato_Id: this.newCandidatoId,
      processo_Id: this.selectedProcessoId,
      ativo: true
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7049/CandidatoProcesso/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    var instance = this

    if(this.selectedProcessoId == 0){
      alert("Selecione um processo seletivo!")
      return
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Cadastro concluído!");
        instance.router.navigate(["/login"])
      })
      .catch(function (error) {
        alert("Não foi possível cadastrá-lo no processo escolhido")

      });
  }

  onSelectChange(event: any) {
    this.selectedProcessoId = event.target.value;
  }
}