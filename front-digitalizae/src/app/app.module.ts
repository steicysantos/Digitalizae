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
    LocalProvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
