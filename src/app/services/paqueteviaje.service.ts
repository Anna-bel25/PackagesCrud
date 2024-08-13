import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaqueteViajeInterface } from "../interfaces/PaqueteViajeInterface";


@Injectable({
    providedIn: "root"
})

export class PaqueteviajeService {

    baseUrl: string = 'https://localhost:7266/api/ReservaPaqueteViaje/GetPaqueteViaje';
    baseUrlTransporte: string = 'https://localhost:7266/api/ReservaPaqueteViaje/GetPaqueteViajeTransporte';

    constructor(private http: HttpClient) {}

    /*getPaqueteViaje_GET(){
        return localStorage.getItem('userName');
    }*/

    getPaqueteViajes(paquetesviaje: PaqueteViajeInterface){
        let auth_token = localStorage.getItem('token_value');
        const header = new HttpHeaders ({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${auth_token}`
        })

        return this.http.post(this.baseUrl, paquetesviaje, {headers: header});
    }

    getPaquetebyTransporte(transporte: string){
        let parameters = "?transporte="+transporte+"&transaccion=CONSULTAR_RESERVAS_POR_TRANSPORTE"
        let auth_token = localStorage.getItem('token_value');
        const header = new HttpHeaders({
            'Content-Type':'application/json' ,
            'Authorization': `bearer ${auth_token}`
        })

        return this.http.get(this.baseUrlTransporte+parameters, {headers: header});
    }
}