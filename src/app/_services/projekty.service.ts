import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from 'src/app/_class/Project';
import { SectionDepartments } from 'src/app/_class/Departments/SectionDepartments';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from "@angular/common/http";
import { LoginService } from 'src/app/_services/login.service';


@Injectable({
  providedIn: 'root'

})
export class ProjektyService {

  log: any;

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  url = 'http://localhost:4200/api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpToken = { headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + this.Cookie.get('access_token')})};

  getProjekty(user: string): Observable<Project[]> {
    var params = {headers: this.httpToken.headers, params: new HttpParams().set('user', user) }
    return this.http.get<Project[]>(this.url, params) 
      .pipe(
        tap(_ => console.log('Pobrano dane')),
          catchError(this.handleError<Project[]>('getProjekty', [])));

  }

  getDepartments(id: number, user: string): Observable<SectionDepartments[]> {

    const url = `${this.url}/${id}/departments`;
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.get<SectionDepartments[]>(url, params)
      .pipe(
        tap(_ => console.log('Pobrano dane')),
        catchError(this.handleError<SectionDepartments[]>('getProjekty', [])));

  }

  getProjekt(id: number): Observable<Project> {

    const url = `${this.url}/${id}`;
    return this.http.get<Project>(url, this.httpToken)
      .pipe(
        tap(_ => console.log('Pobrano projekt o id=${id}')),
        catchError(this.handleError<Project>('getProjekt id=${id}',)));

  }

  updateProjekt(projekt: Project): Observable<any> {
    const id = projekt.id;
    const url = `${this.url}/${id}`;
    return this.http.put(url, projekt, this.httpOptions).pipe(
      tap(_ => console.log(`updated Projekt id=${projekt.id}`)),
      catchError(this.handleError<any>('updateProjekt')))
  }

  addProjekt(projekt: Project): Observable<Project> {
    return this.http.post<Project>(this.url, projekt, this.httpOptions).pipe(
      tap((newProjekt: Project) => console.log(`added projekt w/ id=${newProjekt.id}`)),
      catchError(this.handleError<Project>('addProjekt'))
    );
  }

  deleteProjekt(projekt: Project): Observable<Project> {
    const id = typeof projekt === 'number' ? projekt : projekt.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Project>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted projekt id=${id}`)),
      catchError(this.handleError<Project>('deleteProjekt'))
    );
  }

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
