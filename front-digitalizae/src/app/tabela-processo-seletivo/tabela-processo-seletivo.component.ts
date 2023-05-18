import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fase, Processo } from '../Classes';
import axios from 'axios';
import { createMayBeForwardRefExpression } from '@angular/compiler';
@Component({
  selector: 'app-tabela-processo-seletivo',
  templateUrl: './tabela-processo-seletivo.component.html',
  styleUrls: ['./tabela-processo-seletivo.component.css']
})
export class TabelaProcessoSeletivoComponent {
  processoId : string = ""
  processo : Processo = {
    id:0,
    nome:"Desenvolvimento de sistemas",
    dataFim: Date.now().toString(),
    dataInicio: Date.now().toString(),
    ativo: true,
    qtdeMax: 500
  }
  fases : Array<Fase> = []
  idFaseModal : number = 0
  fasemodaldata : string = ""
  newFase : Fase = {
    titulo:"string",
    id: 1,
    data :"string",
    idProcessoSeletivo: 1,
    tipo : true,
    descricao: "string",
    local: "string",
    endereco: "string",
    atual: false,
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.processoId = params['id'];
      
    });

    var config = {
      method: 'get',
      url: 'https://localhost:7049/Fase/getFaseProcesso/'+ this.processoId,
      headers: { },
    };

    var instance = this
    axios(config)
      .then(function (response) {
        console.log(response.data)
        instance.fases = response.data
        instance.processo = response.data[0].processo
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  setFaseModal(id : number){
    this.idFaseModal = id
    let dateObject = new Date(this.fases[id].data)
    this.fasemodaldata = dateObject.toISOString().substr(0, 10);
  }

  registerFase(){
    
    let titulo = (document.getElementById("tituloRegister") as HTMLInputElement).value;
    let dataini = (document.getElementById("dataRegister") as HTMLInputElement).value;
    let descricao = (document.getElementById("descricaoRegister") as HTMLInputElement).value;
    let endereco = (document.getElementById("enderecoRegister") as HTMLInputElement).value;
    let local = (document.getElementById("localRegister") as HTMLInputElement).value;
    let idProcessoSeletivo = this.processoId;
    let tipo = true;
    
    var data = JSON.stringify({
      titulo : titulo,
      tipo : tipo,
      data : dataini+"T00:00:00.000Z",
      descricao : descricao,
      local :local,
      endereco : endereco,
      processo_Id : idProcessoSeletivo,
      atual : false
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
        console.log(response.data)
      })
      .catch(function (error) {
        alert("Preencha todos os campos")
        console.log(error);
      });
   
  
  }

}
