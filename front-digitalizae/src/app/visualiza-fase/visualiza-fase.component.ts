import { Component } from '@angular/core';

@Component({
  selector: 'app-visualiza-fase',
  templateUrl: './visualiza-fase.component.html',
  styleUrls: ['./visualiza-fase.component.css']
})
export class VisualizaFaseComponent {
  progresso : Array<number> =[]

  ngOnInit(): void {
     this.progresso.push(1)
     this.progresso.push(1)
     this.progresso.push(1)
     this.progresso.push(1)
  }
}
