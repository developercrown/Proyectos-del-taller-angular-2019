import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"]
})

export class FormularioComponent{
  @Output() operacionCompletada = new EventEmitter<any>();
  operandoA:number = 0;
  operandoB:number = 0;

  sumar(){
    if (!isNaN(this.operandoA) && !isNaN(this.operandoB) ) {
      if (this.operandoA == 0 && this.operandoB == 0) {
        this.operacionCompletada.emit({
          resultado: 0,
          message: "No se realizó operacion alguna."
        })
      }else{
        try {
          this.operacionCompletada.emit({
            resultado: ( this.operandoA + this.operandoB ),
            message: "Operacion realizada correctamente."
          })
        }catch(e){
          this.operacionCompletada.emit({
            resultado: 0,
            message: "Ocurrio un error al procesar tu operación."
          })
        }
      }
    }
  }

}
