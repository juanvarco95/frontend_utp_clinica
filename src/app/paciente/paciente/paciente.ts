import { Consulta } from "../consulta/consulta";

export class Paciente {
    id: number;
    nombre: string;
    apellido: string;
    tipoDocumento: string;
    documento: number;
    fechaNacimiento: string;
    lugarNacimiento: string;
    genero: string;
    ocupacionHobbies: string;
    estadoCivil: string;
    religion: string;
    lugarProcencia: string;
    lugarResidencia: string;
    tipoSangre: string;
    eps: string;
    acompananteTelefono: number;
    confiabilidad: string;
    servicio: string;
    lugar: string;
    consultas: Consulta[] = [];
}