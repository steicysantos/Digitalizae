import { Component } from '@angular/core';

@Component({
  selector: 'app-progresso-usuario',
  templateUrl: './progresso-usuario.component.html',
  styleUrls: ['./progresso-usuario.component.css']
})
export class ProgressoUsuarioComponent {
  step: number = 1;
  ngOnInit(): void {
    
  }
}
