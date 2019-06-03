import { Component, OnInit } from '@angular/core'
import * as firebase from 'firebase'
import { LoginService } from './login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  titulo = 'Listado de personas';

  constructor(private loginService: LoginService){

  }

  ngOnInit(): void {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyD3mUbhQaCumOMe8RAtdjDwmMWql4ArsrA",
        authDomain: "listado-personas-602e4.firebaseapp.com",
      }
    )
  }

  salir(){
    this.loginService.logout()
  }

  isAutenticated(){
    return this.loginService.isAutenticated()
  }
}
