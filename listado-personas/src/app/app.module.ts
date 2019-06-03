import { LoginGuardian } from './login/login-guardian.service';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

import { LoggingService } from "./LoggingService.service";
import { PersonasService } from "./personas/persona/PersonasService.service";
import { DataService } from "./data.service";

import { PersonasComponent } from './personas/personas.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataService,
    LoginService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
