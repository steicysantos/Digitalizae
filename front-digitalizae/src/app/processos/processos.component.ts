import { Component } from '@angular/core';
import { Processo } from '../Classes';
import axios from 'axios';
@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent {
  processos : Array<Processo> = []

  
  ngOnInit(): void {
    var url = 'https://localhost:7049/Processo/GetAll'

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
