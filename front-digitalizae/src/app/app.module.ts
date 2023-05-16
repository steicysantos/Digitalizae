import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';
import { HistoricoProcessosComponent } from './historico-processos/historico-processos.component';
import { TabelaProcessoSeletivoComponent } from './tabela-processo-seletivo/tabela-processo-seletivo.component';
import { PerfilCandidatoComponent } from './perfil-candidato/perfil-candidato.component';
import { VisualizaFaseComponent } from './visualiza-fase/visualiza-fase.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AvaliarCandidatosComponent } from './avaliar-candidatos/avaliar-candidatos.component';
import { TabelaCandidatosComponent } from './tabela-candidatos/tabela-candidatos.component';
import { TopBarCandidatoComponent } from './top-bar-candidato/top-bar-candidato.component';
import { TopBarLoginComponent } from './top-bar-login/top-bar-login.component';
import { AdmComponent } from './adm/adm.component';
import { ProcessosComponent } from './processos/processos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCandidatoComponent,
    CadastroProcessoSeletivoComponent,
    HistoricoProcessosComponent,
    TabelaProcessoSeletivoComponent,
    PerfilCandidatoComponent,
    VisualizaFaseComponent,
    TopBarComponent,
    AvaliarCandidatosComponent,
    TabelaCandidatosComponent,
    TopBarCandidatoComponent,
    TopBarLoginComponent,
    AdmComponent,
    ProcessosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
