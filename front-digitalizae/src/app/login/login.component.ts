import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {}

  ngOnInit(): void{
    
  }

  LogIn(){
    let login = (document.getElementById("login") as HTMLInputElement).value;
    let senha = (document.getElementById("senha") as HTMLInputElement).value;

    var data = JSON.stringify({
      Login: login,
      Senha: senha,
    });

    console.log(data)

    var config = {
      method: 'post',
      url: 'https://localhost:7049/Candidato/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("idcandidato", response.data.id)
        alert("Cadastro concluído!");
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
      
  }

}
