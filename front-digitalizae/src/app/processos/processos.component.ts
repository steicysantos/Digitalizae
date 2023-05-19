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
  id : number = -1

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

  changeStatus(id : number){
    let url = "https://localhost:7049/Processo/UpdateStatus/"+id

    axios.put(url).then(function(response){
      console.log(response.data)
      window.location.reload();
    })
  }

  deletarProcesso(id: number) {

    var instance = this

    var config = {
    method: 'delete',
    url: 'https://localhost:7049/Processo/Delet/' + id,
    headers: {
     'Content-Type': 'application/json'
   },
    
     data: ''
    };
    
    
    
    
    axios(config).then(function (response) {
     instance.processos.forEach(element => {
    if (element.id == instance.id) { 
     var indice = instance.processos?.indexOf(element)
     instance.processos.splice(indice, 1)
    
   }
    
    });
    
    })
    
  }
}
