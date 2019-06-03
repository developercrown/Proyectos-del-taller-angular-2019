import {Injectable, EventEmitter} from "@angular/core";
import {Persona} from './persona.model';
import {LoggingService} from '../../LoggingService.service'
import {DataService} from '../../data.service'

@Injectable()
export class PersonasService {

  saludar = new EventEmitter<number>();

  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ){}

  setPersonas(personas: Persona[]){
    this.personas = personas
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas()
  }

  agregarPersona(persona: Persona){
    this.loggingService.enviarMensajeConsola({arg1: "hello World! desde service personas", arg2: persona})

    if(this.personas == null){
      this.personas = []
    }

    this.personas.push(persona)
    this.dataService.guardarPersonas(this.personas)

  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona){
    let persona1 = this.personas[index] //Genera una instancia del elemento
        persona1.nombre =  persona.nombre
        persona1.apellido =  persona.apellido
        this.dataService.modificarPersona(index, persona)
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1)
    this.dataService.eliminarPersona(index)
    //Se vuelve a guardar el arreglo para regenerar los indices

    this.modificarPersonas()
  }

  modificarPersonas(){
    if(this.personas != null){
      this.dataService.guardarPersonas(this.personas)
    }
  }
}
