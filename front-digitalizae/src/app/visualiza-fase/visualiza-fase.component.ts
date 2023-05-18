import { Component } from '@angular/core';
import { Candidato, Fase } from '../Classes';
import axios from "axios";
@Component({
  selector: 'app-visualiza-fase',
  templateUrl: './visualiza-fase.component.html',
  styleUrls: ['./visualiza-fase.component.css']
})
export class VisualizaFaseComponent {
  progresso : Array<Fase> = []
  qtde : Array<Fase> =[]
  faseAtual : Fase ={
    titulo:"string",
    id: 1,
    data :"string",
    idProcessoSeletivo: 1,
    tipo : true,
    descricao: "string",
    local: "string",
    endereco: "string",
    atual :false,
  }
  ngOnInit(): void {

  let processo =  localStorage.getItem("id_processo")
  let id =  localStorage.getItem("idcandidato")

    var config = {
      method: 'get',
      url: 'https://localhost:7049/CandidatoFase/getCandidatoFase/'+id,
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        console.log(response.data)
        for(let i = 0; i< response.data.length ; i++){
          instance.progresso.push(response.data[i].fase)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
    
    var config = {
      method: 'get',
      url: 'https://localhost:7049/Fase/getFaseProcesso/1',
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        instance.qtde = response.data
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  SetFaseModal(i : number){
    this.faseAtual = this.qtde[i]
  }
}
