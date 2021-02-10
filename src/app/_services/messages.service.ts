import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from "@angular/common/http";
import { ReceivedMessages } from '../_class/Messeges/ReceivedMessages';
import { DataMessages } from '../_class/Messeges/DataMessages';
import { SuggestPerson } from 'src/app/_class/Messeges/SuggestPerson';
import { NewMessage } from 'src/app/_class/Messeges/NewMessage';
import Delta from 'quill-delta';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  url = 'http://localhost:4200/api/messages';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpToken = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + this.Cookie.get('access_token') }) };


  getReceivedMessages(user: string, projectId: number, min: number, max: number): Observable<ReceivedMessages[]> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user).set('min', String(min)).set('max', String(max)) };
    return this.http.get<ReceivedMessages[]>(this.url + `/${projectId}/` + "received", params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<ReceivedMessages[]>('Error', [])));

  }

  getSentMessages(user: string, projectId: number, min: number, max: number): Observable<DataMessages[]> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user).set('min', String(min)).set('max', String(max)) };
    return this.http.get<DataMessages[]>(this.url + `/${projectId}/` + "sent", params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<DataMessages[]>('Error', [])));

  }

  getSuggestPersons(projectId: number, text: string): Observable<SuggestPerson[]> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', text) };
    return this.http.get<SuggestPerson[]>(this.url + `/${projectId}/` + "users", params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<SuggestPerson[]>('Error', [])));

  }

  sentMessage(projectId: number, text: string, newMessage: NewMessage, delta: Delta): Observable<NewMessage> {
    var content = JSON.stringify(delta);
    newMessage.content = content;
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', text) };
    return this.http.post<NewMessage>(this.url + `/${projectId}/` + "newMessage", newMessage, params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<NewMessage>('Error',)));

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Błąd podczas pobierania danych');
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }









  }

}
