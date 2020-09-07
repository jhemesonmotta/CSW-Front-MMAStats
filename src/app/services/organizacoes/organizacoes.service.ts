import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_API } from '../base';
import { Organizacao } from 'src/app/model/organizacao';

@Injectable()
export class OrganizacaoService {

  constructor(private http: HttpClient) {
  }

  buscarOrganizacoes(): Observable<Array<Organizacao>> {
    return this.http.get(`${BACKEND_API}organizacoes`) as Observable<Array<Organizacao>>;
  }

}
