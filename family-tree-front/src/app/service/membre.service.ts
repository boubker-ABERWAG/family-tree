import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MembreService {
  private _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  fetch(): Observable<any> {
    return this._http.get(this._backendURL.getAllMembres);
  }

  fetchRandom(): Observable<any> {
    return this._http.get(this._backendURL.randomPeople);
  }

  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.getOneMembre.replace(':id', id));
  }

  delete(id: string): Observable<any> {
    return this._http.delete(this._backendURL.deleteMembre.replace(':id', id));
  }

  update(person: any): Observable<any> {
    return this._http.put(this._backendURL.updateMembre.replace(':id', person.id), person);
  }

  create(person): Observable<any> {
    return this._http.post(this._backendURL.createMembre, person);
  }

}
