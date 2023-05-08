import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cadastro-candidato', component: CadastroCandidatoComponent},
  { path: 'cadastro-processo-seletivo', component: CadastroProcessoSeletivoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
