import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingreso } from '../ingreso/ingreso.model'
import { Egreso } from '../egreso/egreso.model'

import { IngresoService } from '../ingreso/ingreso.service'
import { EgresoService } from '../egreso/egreso.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('selector') inputSelect: ElementRef;

  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { }

  ngOnInit() {
    this.reset()
  }

  reset(){
    this.tipo = "ingresoOperacion";
    this.inputSelect.nativeElement.selectedIndex = 0
    this.descripcionInput = ""
    this.valorInput = null
  }

  tipoOperacion(event){
    this.tipo = event.target.value;
  }

  agregarValor(event){
    event.preventDefault()
    if(this.tipo === "ingresoOperacion"){
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    }else{
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }
    this.reset()
  }

}
