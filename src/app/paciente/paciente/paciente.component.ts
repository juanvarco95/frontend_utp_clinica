import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';
import swal from 'sweetalert2';

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

  delete(paciente: Paciente): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `¿Seguro de eliminar al paciente ${paciente.nombre} ${paciente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if(result.value) {
        this.pacienteService.delete(paciente.id).subscribe(
          response => {
            this.pacientes = this.pacientes?.filter(cli => cli !== paciente);
            swal.fire(
              'Paciente eliminado',
              `Paciente ${paciente.nombre} eliminado con éxito`,
              'success'
            )
          }

        )
      }
    })
  }

}
