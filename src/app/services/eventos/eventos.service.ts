import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_API } from '../base';
import { Evento } from 'src/app/model/evento';

@Injectable()
export class EventoService {

  constructor(private http: HttpClient) {
  }

  buscarEventos(): Observable<Array<Evento>> {
    return this.http.get(`${BACKEND_API}/eventos`) as Observable<Array<Evento>>;
  }

}
