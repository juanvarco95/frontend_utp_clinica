import { Paciente } from "../paciente/paciente";

export class Consulta {
    id: number;
    createAt: string;
    motivoConsulta: string;
    patologicosPersonales: string;
    toxicosPersonales: string;
    alergicosPersonales: string;
    farmacologicosPersonales: string;
    patologicosFamiliares: string;
    diagnostico: string;
    conducta: string;
    paciente: Paciente;
}