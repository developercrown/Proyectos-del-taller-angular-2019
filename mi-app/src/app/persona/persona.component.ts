import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  private nombrePersona:string = "Rene";
  private appPersona:string = "Corona";
  edad:number = 30;

  constructor() { }

  getFullname():string{
    return this.nombrePersona + " " + this.appPersona;
  }

  ngOnInit() {
  }

}
