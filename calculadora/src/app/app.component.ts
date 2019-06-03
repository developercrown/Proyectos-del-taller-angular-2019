import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  welcomeMessage:string = "Bienvenido!, ingresa tu operacion.";
  appTitle = 'Aplicación de Calculadora';
  resultadoOperacion: number = 999;
  statusMensajeOperacion: string = "Hola Mundo!";

  constructor(){
    this.reiniciar()
  }

  onOperacionCompletada(result: any){
    console.log(result)
    this.resultadoOperacion = result.resultado
    this.statusMensajeOperacion = result.message
  }

  reiniciar(){
    this.resultadoOperacion = 0;
    this.statusMensajeOperacion = this.welcomeMessage
  }

}
