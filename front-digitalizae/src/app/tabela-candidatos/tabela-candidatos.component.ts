import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Candidato, Fase, Processo } from '../Classes';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tabela-candidatos',
  templateUrl: './tabela-candidatos.component.html',
  styleUrls: ['./tabela-candidatos.component.css']
})
export class TabelaCandidatosComponent {

  candidatos : Array<Candidato> = []
  processoId : number = 0
  checked : Array<number> = []
  aprovados : Array<Candidato> = []
  fases : Array<Fase> = []
  index : number = -1

  faseAtual : Fase = {
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

  processo : Processo = {
    id:0,
    nome:"Desenvolvimento de sistemas",
    dataFim: Date.now().toString(),
    dataInicio: Date.now().toString(),
    ativo: true,
    qtdeMax: 500
  }

  constructor(private route: ActivatedRoute) { }

  @ViewChildren('customCheckbox') checkboxes!: QueryList<ElementRef>;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.processoId = params['id'];
      
    });
    
    this.GetFases()
    var url = 'https://localhost:7049/CandidatoProcesso/getAllCandidatosProcessoFaseAtual/'+this.processoId

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
        for(let i = 0; i < response.data.length; i++){
          instance.candidatos.push(response.data[i].candidato)
        }
        console.log(instance.candidatos)
      })
      .catch(function (error) {
        console.log(error);
      });

      url = 'https://localhost:7049/Processo/getProcesso/'+this.processoId

      axios.get(url).then(function(response){instance.processo = response.data[0], console.log(instance.processo)})
      
  }

  addCheck(id : number){
    console.log(this.checked)
    if(!this.checked.includes(id))
      this.checked.push(id)
    else{
      this.checked = this.checked.filter(arr => arr != id);
    }
  }

  verifyChecked() {
    let instance = this
    this.candidatos.forEach(function(candidato){
      if(instance.checked.includes(candidato.id)){
        instance.aprovados.push(candidato)
      }
    });
  }

  Aprovar(){
    var instance = this
    // this.aprovados.forEach(function(candidato) {
    //   instance.registerCandidatoFase(candidato.id)
    // });
    this.setFaseAtual()
  }

  GetFases(){
    let instance = this
    let url =  'https://localhost:7049/Fase/getFaseProcesso/'+this.processoId

    console.log(url)
    axios.get(url).then(function(response){

      instance.fases = response.data
      console.log(instance.fases)
      let i = 0;
      instance.fases.forEach(function(fase) {

        if(fase.atual){
          instance.faseAtual = fase
          instance.index = i
        }
        i++
      });
      
    })
    
  }


  registerCandidatoFase(idcandidato:number){

    var data = JSON.stringify({
      candidato_Id: idcandidato,
      fase_id :this.fases[this.index+1].id
    });

    console.log(data)
    var config = {
      method: 'post',
      url: 'https://localhost:7049/CandidatoFase/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("Passou um candidato de fase")
      })
      .catch(function (error) {
        alert("Não foi possível cadastrá-lo na fase")

      });

  }

  setFaseAtual(){
    let id : number = -1
    id = (this.fases[this.index].id)+1
    var config = {
      method: 'put',
      url: 'https://localhost:7049/Fase/FaseAtual/'+id,
      headers: {
        'Content-Type': 'application/json'
      },
    };

    var instance = this

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Mudou a fase tbm")
      })
      .catch(function (error) {
        alert("Não foi possível cadastrá-lo na fase")

      });
  }

} 


