import { Egreso } from './egreso.model'

export class EgresoService {
  egresos: Egreso[]=[
    new Egreso("Renta de departamento", 900),
    new Egreso("Ropa", 200)
  ]

  eliminar(egreso: Egreso){
    let index = this.egresos.indexOf(egreso)
    this.egresos.splice(index, 1)
  }
}
