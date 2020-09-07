import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_API } from '../base';

@Injectable()
export class LutaService {

  constructor(private http: HttpClient) {
  }

  buscarLutas(): Observable<Array<any>> {
    return this.http.get(`${BACKEND_API}/lutas`) as Observable<Array<any>>;
  }

}
