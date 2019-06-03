import { Component, OnInit } from '@angular/core';

import { Ingreso } from './ingreso/ingreso.model'
import { Egreso } from './egreso/egreso.model'

import { IngresoService } from './ingreso/ingreso.service'
import { EgresoService } from './egreso/egreso.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ingresos: Ingreso[]=[]
  egresos: Egreso[]=[]

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ){

  }

  ngOnInit(){
    console.log('inicializado');
    this.ingresos = this.ingresoServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;

  }


  getIngresoTotal(){
    let ingresoTotal: number = 0;

    this.ingresos.forEach((ingreso: Ingreso)=>{
      ingresoTotal += ingreso.valor
    })

    // this.ingresos.map((ingreso)=>{ // Forma alterna
    //   ingresoTotal += ingreso.valor
    //   return null
    // })

    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;

    this.egresos.forEach(egreso=>{
      egresoTotal += egreso.valor
    })

    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal()
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal()
  }

}
