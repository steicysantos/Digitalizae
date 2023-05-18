import { Component, importProvidersFrom } from '@angular/core';
import axios from 'axios';
import { Processo } from '../Classes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-avaliar-candidatos',
  templateUrl: './avaliar-candidatos.component.html',
  styleUrls: ['./avaliar-candidatos.component.css']
})
export class AvaliarCandidatosComponent {
  
  processos : Array<Processo> = []

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
}
