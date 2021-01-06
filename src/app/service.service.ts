import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'http://157.245.138.232:9091/api/v1/test/superheroes'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  /**
   * metodo que se encarga de devolver la lista de superheroes filtradas por el parametro "puedeVolar"
   * @param puedeVolar indica si el superheroe puede volar
   */

  obtenerSuperheroes(puedeVolar: boolean): Observable<any> {
    return this.http.get(`${apiURL}?puedeVolar=${puedeVolar}`)
  }

}
