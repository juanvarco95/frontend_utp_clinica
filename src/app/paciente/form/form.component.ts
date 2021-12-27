import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente';
import swal from 'sweetalert2';
import { PacienteService } from '../paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  titulo: string = 'Crear Paciente';
  paciente: Paciente = new Paciente();

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarPaciente();
  }

  cargarPaciente(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      console.log(id);
      if(id) {
        this.pacienteService.getPaciente(id).subscribe(
          (paciente) => this.paciente = paciente
        )
      }
    })
  }

  create(): void {
    this.pacienteService.create(this.paciente).subscribe(
      paciente => {
        this.router.navigate(['/pacientes']);
        swal.fire('Nuevo Paciente', `Paciente ${paciente.nombre} creado con éxito!`, 'success');
      }
    )
  }

  update(): void {
    this.pacienteService.update(this.paciente).subscribe(
      paciente => {
        this.router.navigate(['/pacientes']);
        swal.fire('Paciente Actualizado', `Paciente ${paciente.nombre} actualizado con éxito!!!`, 'success');
      }
    )
  }
}
