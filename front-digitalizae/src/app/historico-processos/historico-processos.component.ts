import { Component } from '@angular/core';
import { Processo } from '../Classes';
import { CadastroCandidatoComponent } from '../cadastro-candidato/cadastro-candidato.component';
@Component({
  selector: 'app-historico-processos',
  templateUrl: './historico-processos.component.html',
  styleUrls: ['./historico-processos.component.css']
})
export class HistoricoProcessosComponent {
  processo : Processo = {
    id:0,
    nome:"Desenvolvimento de sistemas",
    DataFim: Date.now().toString(),
    DataInicio: Date.now().toString(),
    ativo: true,
    qtdeMax: 500
  }

  isVisible : boolean = false

  processos: Array<Processo> = []
  ngOnInit(): void {
    this.processos.push(this.processo)
  }

  Visual(){
    if(this.isVisible){
      this.isVisible = false
      console.log(this.isVisible)
      return
    }
      this.isVisible = false
      console.log(this.isVisible)
  }
}

