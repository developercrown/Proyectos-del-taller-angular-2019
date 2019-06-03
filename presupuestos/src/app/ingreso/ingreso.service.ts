import { Ingreso } from './ingreso.model'

export class IngresoService {
  ingresos: Ingreso[]=[
    new Ingreso("Salario", 4000),
    new Ingreso("Venta de Coche", 500)
  ]

  eliminar(ingreso: Ingreso){
    const index: number = this.ingresos.indexOf(ingreso)
    this.ingresos.splice(index, 1) //remueve un elemento apartir del indice que ingresamos

  }
}
