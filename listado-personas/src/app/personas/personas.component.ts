import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {Persona} from './persona/persona.model'

import {LoggingService} from '../LoggingService.service'
import {PersonasService} from './persona/PersonasService.service'
import { Router } from '@angular/router'

import {FormularioComponent} from './formulario/formulario.component'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @ViewChild('formularioComponent') formReference: FormularioComponent;
  personas:Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router
  ){}

  ngOnInit(): void{
    // this.personas = this.personasService.personas;
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        console.log('personas', personas);
        this.personas = personas
        this.personasService.setPersonas(personas)
      }
    )
  }

  onPersonaAgregada(persona: Persona){
    this.loggingService.enviarMensajeConsola({arg1: "Lol", arg2: persona})
    // this.personas.push(persona)
    // this.personasService.agregarPersona(persona)
  }

  onSubmit(){
    console.log('hola')
  }

  public onResetFormulario():void{
    this.formReference.reset()
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
