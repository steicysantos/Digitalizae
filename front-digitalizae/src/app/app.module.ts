import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';
import { HistoricoProcessosComponent } from './historico-processos/historico-processos.component';
import { CadastroNovasFasesComponent } from './cadastro-novas-fases/cadastro-novas-fases.component';
import { TabelaProcessoSeletivoComponent } from './tabela-processo-seletivo/tabela-processo-seletivo.component';
import { PerfilCandidatoComponent } from './perfil-candidato/perfil-candidato.component';
import { VisualizaFaseComponent } from './visualiza-fase/visualiza-fase.component';
import { LocalProvaComponent } from './local-prova/local-prova.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProgressoUsuarioComponent } from './progresso-usuario/progresso-usuario.component';
import { PrincipalAdmComponent } from './principal-adm/principal-adm.component';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { AvaliarCandidatosComponent } from './avaliar-candidatos/avaliar-candidatos.component';
import { TabelaCandidatosComponent } from './tabela-candidatos/tabela-candidatos.component';
import { TopBarCandidatoComponent } from './top-bar-candidato/top-bar-candidato.component';
import { TopBarLoginComponent } from './top-bar-login/top-bar-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCandidatoComponent,
    CadastroProcessoSeletivoComponent,
    HistoricoProcessosComponent,
    CadastroNovasFasesComponent,
    TabelaProcessoSeletivoComponent,
    PerfilCandidatoComponent,
    VisualizaFaseComponent,
    LocalProvaComponent,
    TopBarComponent,
    ProgressoUsuarioComponent,
    PrincipalAdmComponent,
    ListaProcessosComponent,
    AvaliarCandidatosComponent,
    TabelaCandidatosComponent,
    TopBarCandidatoComponent,
    TopBarLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
