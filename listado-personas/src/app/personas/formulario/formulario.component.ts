import { Component, OnInit/*EventEmitter, Output, ViewChild, ElementRef*/ } from '@angular/core';
import {Persona} from '../persona/persona.model'

import {LoggingService} from '../../LoggingService.service'
import {PersonasService} from '../persona/PersonasService.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{
  // @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput:string;
  index: number = null;
  modoEdicion: number;
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.personasService.saludar.subscribe((indice: number)=>{
      alert("El indice es: "+indice)
    })
  }

  ngOnInit(){
    console.log('router', this.router);
    console.log('route', this.route);

    this.index = this.route.snapshot.params["id"]
    this.modoEdicion = +this.route.snapshot.queryParams["modoEdicion"]
    //El agregar el simbolo '+' antes de la ruta lo convierte la entrada string a numero, esto es equivalente a intval()

    console.log(this.index, this.modoEdicion);
    // if(this.index){
    if(this.modoEdicion!=null && this.modoEdicion == 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);

      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  // onAgregarPersona(){ //Utilizando como modelo
    // let persona1 = new Persona(this.nombreInput, this.apellidoInput)
    // this.personaCreada.emit(persona1);
  // }

  // onAgregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){ //Utilizando referencias locales
    // let persona1 = new Persona(nombreInput.value, apellidoInput.value)
    // this.personaCreada.emit(persona1);
  // }

  onGuardarPersona(event){ //Utilizando como ViewChild
    event.preventDefault();
    // let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value)
    let persona1 = new Persona(this.nombreInput, this.apellidoInput)
    // this.loggingService.enviarMensajeConsola({arg1: "hello World!", arg2: persona1})

    if(this.index){
      //Modo de edición
      this.personasService.modificarPersona(this.index, persona1)
    }else{
      // this.personaCreada.emit(persona1);
      this.personasService.agregarPersona(persona1)
      this.reset()
    }

    this.router.navigate(['personas'])
  }

  public reset():void{
    console.log('reiniciando')
    this.nombreInput = ""
    this.apellidoInput = ""
    // this.nombreInput.nativeElement.value = ""
    // this.apellidoInput.nativeElement.value = ""
  }

  eliminarPersona(event: Event){
    event.preventDefault()
    if(this.index != null){
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas'])
  }

}
