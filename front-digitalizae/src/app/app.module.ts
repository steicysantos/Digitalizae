import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo/cadastro-processo-seletivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCandidatoComponent,
    CadastroProcessoSeletivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
