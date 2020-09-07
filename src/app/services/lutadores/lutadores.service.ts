import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_API } from '../base';
import { Lutador } from 'src/app/model/lutador';

@Injectable()
export class LutadoresService {

  constructor(private http: HttpClient) {
  }

  buscarLutadores(): Observable<Array<Lutador>> {
    return this.http.get(`${BACKEND_API}lutadores`) as Observable<Array<Lutador>>;
  }

}
