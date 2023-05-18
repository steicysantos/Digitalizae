import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';
import { HistoricoProcessosComponent } from './historico-processos/historico-processos.component';
import { VisualizaFaseComponent } from './visualiza-fase/visualiza-fase.component';
import { TabelaProcessoSeletivoComponent } from './tabela-processo-seletivo/tabela-processo-seletivo.component';
import { PerfilCandidatoComponent } from './perfil-candidato/perfil-candidato.component';
import { AvaliarCandidatosComponent } from './avaliar-candidatos/avaliar-candidatos.component';
import { TabelaCandidatosComponent } from './tabela-candidatos/tabela-candidatos.component';
import { AdmComponent } from './adm/adm.component';
import { ProcessosComponent } from './processos/processos.component';
import { EditarDadosComponent } from './editar-dados/editar-dados.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cadastro-candidato', component: CadastroCandidatoComponent},
  { path: 'cadastro-processo-seletivo', component: CadastroProcessoSeletivoComponent},
  { path: 'historico-processos', component: HistoricoProcessosComponent},
  { path: 'visualiza-fase', component:VisualizaFaseComponent},
  { path: 'tabela-processo-seletivo/:id', component:TabelaProcessoSeletivoComponent},
  { path: 'perfil-candidato', component:PerfilCandidatoComponent},
  { path: 'avaliar-candidatos', component:AvaliarCandidatosComponent},
  { path: 'tabela-candidatos/:id', component:TabelaCandidatosComponent},
  { path: 'adm', component:AdmComponent},
  { path: 'processos', component:ProcessosComponent},
  { path: 'editar-dados', component:EditarDadosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
