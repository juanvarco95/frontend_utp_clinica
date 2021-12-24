import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  paciente: Paciente = new Paciente();

  constructor() { }

  ngOnInit(): void {
  }

}
