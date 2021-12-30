import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Consulta } from "./consulta";

@Injectable({
    providedIn : 'root',
})
export class ConsultaService{
    private urlEndPoint: string = 'http://localhost:8080/clinica/consultas';
    private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


    constructor(private http: HttpClient) {}

    getConsulta(id: number): Observable<Consulta> {
        return this.http.get<Consulta>(`${this.urlEndPoint}/${id}`);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
    }

    create(consulta: Consulta): Observable<Consulta>{
        return this.http.post<Consulta>(this.urlEndPoint, consulta, {headers: this.httpHeaders});
    }
}