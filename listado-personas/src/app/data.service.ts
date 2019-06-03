import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import {Persona} from './personas/persona/persona.model'

@Injectable()
export class DataService {
    host: string = "https://listado-personas-602e4.firebaseio.com"
    
    constructor(private httpClient: HttpClient, private loginService: LoginService){

    }

    loadToken(): string{
      return this.loginService.getIdToken()
    }

    cargarPersonas(){
      let URL = `${this.host}/datos.json?auth=${this.loadToken()}`
      return this.httpClient.get(URL)
    }

    guardarPersonas(personas: Persona[]){
      let URL = `${this.host}/datos.json?auth=${this.loadToken()}`

      // this.httpClient.post(
      //   URL, personas
      // ).subscribe(
      //   response=>{
      //     console.log('respuesta', response);
      //   },
      //   error =>{
      //     console.log('error', error);
      //   }
      // )

      this.httpClient.put(
        URL, personas
      ).subscribe(
        response=>{
          console.log('respuesta', response);
        },
        error =>{
          console.log('error', error);
        }
      )
    }

    modificarPersona(index: number, persona: Persona){
      let URL: string;
      URL = `${this.host}/datos/${index}.json?auth=${this.loadToken()}`
      this.httpClient.put(URL, persona).subscribe((response)=>{
        console.log('respuesta actualizacion', response);
      }, (error)=>{
        console.log('error actualizacion', error);
      })
    }

    eliminarPersona(index: number){
      let URL = `${this.host}/datos/${index}.json?auth=${this.loadToken()}`
      this.httpClient.delete(URL).subscribe((response)=>{
        console.log('respuesta eliminar persona', response);
      }, (error)=>{
        console.log('error eliminar persona', error);
      })
    }
}
