import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Paciente } from "./paciente";

@Injectable()
export class PacienteService {
    private urlEndPoint: string = "http://localhost:8080/clinica/pacientes";
    private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    getPacientes():Observable<Paciente[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Paciente[])
        );
    }

    create(paciente: Paciente): Observable<Paciente> {
        return this.http.post<Paciente>(this.urlEndPoint, paciente, {headers: this.httpHeaders});
    }

    getPaciente(id: number): Observable<Paciente> {
        return this.http.get<Paciente>(`${this.urlEndPoint}/${id}`);
    }

    update(paciente: Paciente): Observable<Paciente> {
        return this.http.put<Paciente>(`${this.urlEndPoint}/${paciente.id}`, paciente, {headers: this.httpHeaders});
    }

    delete(id: number): Observable<Paciente> {
        return this.http.delete<Paciente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
    }
}