import { Component } from '@angular/core';
import axios from "axios"
import { Fase } from '../Classes';
@Component({
  selector: 'app-local-prova',
  templateUrl: './local-prova.component.html',
  styleUrls: ['./local-prova.component.css']
})
export class LocalProvaComponent {
  fases : Array<Fase> =[]
  fase : Fase = {
    id : 1,
    idProcessoSeletivo: 1,
    tipo: true,
    descricao: "aaaaa",
    local: "aaaa",
  }

  indexFase = 2

  ngOnInit(): void {
    var idProcesso = "3"
  
    var config = {
      method: 'get',
      url: 'http://localhost:5164/Fase/GetByCandidatoId/'+idProcesso,
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        instance.fases = response.data
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    
  }

}
