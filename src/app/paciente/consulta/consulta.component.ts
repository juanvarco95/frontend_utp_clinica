import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente/paciente.service';
import { Consulta } from './consulta';
import { ConsultaService } from './consulta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
})
export class ConsultaComponent implements OnInit {

  
  titulo: string = 'Nueva Consulta';
  consulta: Consulta = new Consulta();


  constructor(
    private pacienteService: PacienteService,
    private consultaService: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cargarConsulta();
   
  }

  create(consultaForm): void {
    console.log(this.consulta);
      if(consultaForm.form.valid) {
        this.consultaService.create(this.consulta).subscribe(consulta => {
        swal.fire(this.titulo, `Consulta creada del paciente ${consulta.paciente} creada con éxito`, 'success');
        this.router.navigate(['/pacientes']);
      }
    );
    }
  }

  cargarConsulta(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      let pacienteId = +params.get('pacienteId');
      console.log(pacienteId);  
        this.pacienteService.getPaciente(pacienteId).subscribe(
          paciente => this.consulta.paciente = paciente
        );
      }
    );
  }
  

}
