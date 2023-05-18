import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Candidato } from '../Classes';
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
  constructor(private route: ActivatedRoute) { }
  
  @ViewChildren('customCheckbox') checkboxes!: QueryList<ElementRef>;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.processoId = params['id'];
      
    });
    console.log(this.processoId)
    var url = 'https://localhost:7049/CandidatoProcesso/getAllCandidatosProcesso/'+this.processoId

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
    
  }

  confirmarAprovados(){
    
  }

  verifyChecked() {
    console.log("En")
    this.checkboxes.forEach((checkbox: ElementRef) => {
      const isChecked = checkbox.nativeElement.checked;
      console.log('Checkbox checked:', isChecked);
    });
  }
} 


