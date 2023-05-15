import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';
import { HistoricoProcessosComponent } from './historico-processos/historico-processos.component';
import { VisualizaFaseComponent } from './visualiza-fase/visualiza-fase.component';
import { TabelaProcessoSeletivoComponent } from './tabela-processo-seletivo/tabela-processo-seletivo.component';
import { CadastroNovasFasesComponent } from './cadastro-novas-fases/cadastro-novas-fases.component';
import { PerfilCandidatoComponent } from './perfil-candidato/perfil-candidato.component';
import { LocalProvaComponent } from './local-prova/local-prova.component';
import { ProgressoUsuarioComponent } from './progresso-usuario/progresso-usuario.component';
import { PrincipalAdmComponent } from './principal-adm/principal-adm.component';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { AvaliarCandidatosComponent } from './avaliar-candidatos/avaliar-candidatos.component';
import { TabelaCandidatosComponent } from './tabela-candidatos/tabela-candidatos.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cadastro-candidato', component: CadastroCandidatoComponent},
  { path: 'cadastro-processo-seletivo', component: CadastroProcessoSeletivoComponent},
  { path: 'historico-processos', component: HistoricoProcessosComponent},
  { path: 'visualiza-fase', component:VisualizaFaseComponent},
  { path: 'tabela-processo-seletivo', component:TabelaProcessoSeletivoComponent},
  { path: 'cadastro-novas-fases', component:CadastroNovasFasesComponent},
  { path: 'perfil-candidato', component:PerfilCandidatoComponent},
  { path: 'local-prova', component:LocalProvaComponent},
  { path: 'local-prova', component:LocalProvaComponent},
  { path: 'progresso-usuario', component:ProgressoUsuarioComponent},
  { path: 'adm', component:PrincipalAdmComponent},
  { path: 'processos', component:ListaProcessosComponent},
  { path: 'avaliar-candidatos', component:AvaliarCandidatosComponent},
  { path: 'tabela-candidatos', component:TabelaCandidatosComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
