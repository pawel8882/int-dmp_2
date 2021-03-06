import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from 'src/app/_class/Project';
import { SectionDepartments } from 'src/app/_class/Departments/SectionDepartments';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from "@angular/common/http";
import { LoginService } from 'src/app/_services/login.service';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  log: any;

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  url = 'http://localhost:4200/api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpToken = { headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + this.Cookie.get('access_token') }) };

  getDepartments(id: number, user: string): Observable<SectionDepartments[]> {

    const url = `${this.url}/${id}/departments`;
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.get<SectionDepartments[]>(url, params)
      .pipe(
        tap(_ => console.log('Pobrano dane')),
        map(data => {return data }),
        catchError(this.handleError<SectionDepartments[]>('getProjekty', [])));

  }

  /*mapMenuItems(): Observable<SectionDepartments[]> {
    this.getDepartments().
  }*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('Błąd podczas pobierania danych'); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }


  }

}
