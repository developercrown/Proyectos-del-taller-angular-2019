import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  // template: '<h1>listado de personas</h1> <app-persona></app-persona>'
  // template: `
  //   <h1>listado de personas</h1>
  //   <app-persona></app-persona>
  // `
  // styleUrls: ["./personas.component.css"]
  styles: [`
    h1{
      color: blue;
    }
  `]
})

export class PersonasComponent {
  agregarPersona=false;
  agregarPersonaStatus= "No se ha agregado ninguna persona";
  tituloPersona = "";
  personaCreada=false;

  constructor(){
    setTimeout(()=>{
      this.agregarPersona = true;
    }, 1000)
  }

  onCrearPersona(){
    this.agregarPersonaStatus = "Persona agregada con titulo ";
    this.personaCreada = true;
  }

  onModificarPersona(event: Event){
    this.tituloPersona = (<HTMLInputElement>event.target).value
  }

}
