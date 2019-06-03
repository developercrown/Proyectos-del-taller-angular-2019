import {Component, Input} from '@angular/core'

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.component.html"
})

export class ResultadoComponent{
  @Input() resultado: number;
  @Input() statusOperacion: string;
}
