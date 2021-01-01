import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Projekt } from './projekt';
import { department } from './projekt-navi/department';


@Injectable({
  providedIn: 'root'

})
export class ProjektyService {

  log: any;

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4200/api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProjekty(): Observable<Projekt[]> {

    return this.http.get<Projekt[]>(this.url)
      .pipe(
        tap(_ => console.log('Pobrano dane')),
          catchError(this.handleError<Projekt[]>('getProjekty', [])));

  }

  getDepartments(id: number): Observable<department[]> {

    const url = `${this.url}/${id}/departments`;
    return this.http.get<department[]>(url)
      .pipe(
        tap(_ => console.log('Pobrano dane')),
        catchError(this.handleError<department[]>('getProjekty', [])));

  }

  getProjekt(id: number): Observable<Projekt> {

    const url = `${this.url}/${id}`;
    return this.http.get<Projekt>(url)
      .pipe(
        tap(_ => console.log('Pobrano projekt o id=${id}')),
        catchError(this.handleError<Projekt>('getProjekt id=${id}',)));

  }

  updateProjekt(projekt: Projekt): Observable<any> {
    const id = projekt.id;
    const url = `${this.url}/${id}`;
    return this.http.put(url, projekt, this.httpOptions).pipe(
      tap(_ => console.log(`updated Projekt id=${projekt.id}`)),
      catchError(this.handleError<any>('updateProjekt')))
  }

  addProjekt(projekt: Projekt): Observable<Projekt> {
    return this.http.post<Projekt>(this.url, projekt, this.httpOptions).pipe(
      tap((newProjekt: Projekt) => console.log(`added projekt w/ id=${newProjekt.id}`)),
      catchError(this.handleError<Projekt>('addProjekt'))
    );
  }

  deleteProjekt(projekt: Projekt): Observable<Projekt> {
    const id = typeof projekt === 'number' ? projekt : projekt.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Projekt>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted projekt id=${id}`)),
      catchError(this.handleError<Projekt>('deleteProjekt'))
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
