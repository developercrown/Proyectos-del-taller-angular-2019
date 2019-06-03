import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model'
import { IngresoService } from './ingreso.service'

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = []

  constructor(private ingresoServicio: IngresoService) { }

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso){
    this.ingresoServicio.eliminar(ingreso)
  }

}
