import { Component } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent {
  constructor() { }

  ngOnInit(): void {

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
      CPF: CPF,
      Login: login,
      Senha: senha,
      Nome: nome,
      DataNascimento: nascimento,
      Telefone: telefone,
      Email: email,
    });

    console.log(data)

    var config = {
      method: 'post',
      url: 'https://localhost:7049/Candidato/register',
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