import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ConsultaComponent } from "./consulta/consulta.component";
import { FormComponent } from "./form/form.component";
import { PacienteComponent } from "./paciente/paciente.component";
import { PacienteService } from "./paciente/paciente.service";

const routes: Routes = [
    {path: '', redirectTo: '/pacientes',pathMatch: 'full'},
    {path: 'pacientes', component: PacienteComponent},
    {path: 'pacientes/form', component: FormComponent},
    {path: 'pacientes/form/:id', component: FormComponent},
    // {path: 'consultas', component: ConsultaComponent},
    {path: 'consultas/:id', component: ConsultaComponent},
    {path: 'consultas/form/:pacienteId', component: ConsultaComponent},
]

@NgModule({
    declarations: [
        ConsultaComponent,
        PacienteComponent,
        FormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        PacienteService,
    ]
})
export class PacienteModule {}