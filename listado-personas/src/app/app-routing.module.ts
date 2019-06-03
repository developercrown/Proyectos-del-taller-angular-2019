import { LoginGuardian } from './login/login-guardian.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasComponent } from './personas/personas.component'
import { FormularioComponent } from './personas/formulario/formulario.component'
import { ErrorComponent } from './error/error.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardian],
    component: PersonasComponent
  },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [LoginGuardian],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
