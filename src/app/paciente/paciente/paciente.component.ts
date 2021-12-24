import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  titulo: string = 'Proyecto UTP Clinica';

  constructor(
    private pacienteService: PacienteService
    ) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(pacientes => {this.pacientes = pacientes});
  }

}
