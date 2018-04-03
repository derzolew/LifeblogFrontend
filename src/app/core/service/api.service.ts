import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  private createHeaders(authorizationType: AuthorizationType): HttpHeaders {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    switch (authorizationType) {
      case AuthorizationType.BASIC: {
        headers['Authorization'] = `Basic ${environment.basicToken}`;
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
        break;
      }

      case AuthorizationType.BEARER: {
        headers['Authorization'] = `Bearer ${this.tokenService.getAccessToken()}`;
        break;
      }

      default:
        break;
    }
    return new HttpHeaders(headers);
  }

  private handleError(error): ErrorObservable {
    console.log('REQUEST ERROR', error);
    return Observable.throw(error);
  }

  public get(url: string,
             authorizationType: AuthorizationType,
             queryParams: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseURL}/${url}`, {
      headers: this.createHeaders(authorizationType),
      params: queryParams
    }).pipe(catchError(this.handleError.bind(this)));
  }

  public post(url: string,
              authorizationType: AuthorizationType,
              body: Object = {},
              queryParams: HttpParams): Observable<any> {
    return this.http.post(
      `${environment.baseURL}/${url}`,
      authorizationType !== AuthorizationType.BASIC ? JSON.stringify(body) : body,
      {
        headers: this.createHeaders(authorizationType),
        params: queryParams
      }).pipe(catchError(this.handleError.bind(this)));
  }

  public put(url: string,
             authorizationType: AuthorizationType,
             body: Object = {},
             queryParams: HttpParams = new HttpParams()): Observable<any> {
    return this.http.put(
      `${environment.baseURL}/${url}`,
      authorizationType !== AuthorizationType.BASIC ? JSON.stringify(body) : body,
      {
        headers: this.createHeaders(authorizationType),
        params: queryParams
      }).pipe(catchError(this.handleError.bind(this)));
  }

  public patch(url: string,
               authorizationType: AuthorizationType,
               body: Object = {},
               queryParams: HttpParams = new HttpParams()): Observable<any> {
    return this.http.patch(
      `${environment.baseURL}/${url}`,
      authorizationType !== AuthorizationType.BASIC ? JSON.stringify(body) : body,
      {
        headers: this.createHeaders(authorizationType),
        params: queryParams
      }).pipe(catchError(this.handleError.bind(this)));
  }

}

export enum AuthorizationType {
  NONE, BASIC, BEARER
}

