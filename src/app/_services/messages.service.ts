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
import { DetailedMessage } from 'src/app/_class/Messeges/DetailedMessage';
import { DisplayMessage } from 'src/app/_class/Messeges/DidsplayMessages';
import { ParamDisplayMessages } from 'src/app/_class/Messeges/ParamDisplayMessages';
import { Category } from 'src/app/_class/Messeges/Category';
import { PaginatorFilterClass } from '../projekt-navi/messages/paginator/PaginatorFilterClass';
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


  getReceivedMessages(user: string, projectId: number, paginator: PaginatorFilterClass): Observable<ParamDisplayMessages> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.post<ParamDisplayMessages>(this.url + `/${projectId}/` + "received", paginator, params)
      .pipe(
        tap(_ => console.log('Pobrano odebrane wiadomości.')),
        catchError(this.handleError<ParamDisplayMessages>('Error', )));

  }

  getSentMessages(user: string, projectId: number, paginator: PaginatorFilterClass): Observable<ParamDisplayMessages> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.post<ParamDisplayMessages>(this.url + `/${projectId}/` + "sent", paginator, params)
      .pipe(
        tap(_ => console.log('Pobrano wysłane wiadomości.')),
        catchError(this.handleError<ParamDisplayMessages>('Error', )));

  }

  getSuggestPersons(projectId: number, text: string): Observable<SuggestPerson[]> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', text) };
    return this.http.get<SuggestPerson[]>(this.url + `/${projectId}/` + "users", params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<SuggestPerson[]>('Error', [])));

  }

  getCategories(text: string): Observable<Category[]> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', text) };
    return this.http.get<Category[]>(this.url + `/` + "categories", params)
      .pipe(
        tap(_ => console.log('dane')),
        catchError(this.handleError<Category[]>('Error', [])));

  }

  sentMessage(projectId: number, text: string, newMessage: NewMessage, delta: Delta): Observable<NewMessage> {
    var content = JSON.stringify(delta);
    newMessage.content = content;
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', text) };
    return this.http.post<NewMessage>(this.url + `/${projectId}/` + "newMessage", newMessage, params)
      .pipe(
        tap(_ => console.log('Message sent.')),
        catchError(this.handleError<NewMessage>('Error',)));

  }

  sentReplyMessage(messageId: number, user: string, newMessage: NewMessage, delta: Delta): Observable<NewMessage> {
    var content = JSON.stringify(delta);
    newMessage.content = content;
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.post<NewMessage>(this.url + `/detailedMessage/${messageId}`, newMessage, params)
      .pipe(
        tap(_ => console.log('Message reply sent.')),
        catchError(this.handleError<NewMessage>('Error',)));

  }

  getDetailedMessage(messageId: number, user: string): Observable<DetailedMessage> {
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.get<DetailedMessage>(this.url + `/detailedMessage/${messageId}`, params)
      .pipe(
        tap(_ => console.log('Detailed message obtained.')),
        catchError(this.handleError<DetailedMessage>('Error', )));

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Błąd podczas pobierania danych');
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


  parseDelta(data: DetailedMessage): DetailedMessage {

    var content = JSON.parse(data.message.content as any);
    data.message.content = content;
    var i;
    for (i = 0; i < data.message.replyMessages.length; i++) {
      var content = JSON.parse(data.message.replyMessages[i].content as any);
      data.message.replyMessages[i].content = content;
    }

    return data;
  }

}
