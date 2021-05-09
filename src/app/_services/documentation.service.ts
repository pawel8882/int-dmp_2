import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from "@angular/common/http";
import { TreeNode } from 'primeng/api';
import { FileStatus } from '../_class/Files/FileStatus';
import { FileDescription } from '../_class/Files/FileDescription';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  url = 'http://localhost:4200/api/file';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpToken = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + this.Cookie.get('access_token') }) };
  httpTokenFileUpload = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.Cookie.get('access_token') }) };

  getDirectories(): Observable<TreeNode[]> {
    let projectId = this.Cookie.get("opened_project");
    let user = this.Cookie.get("user_name");
    var params = { headers: this.httpToken.headers, params: new HttpParams().set('user', user) };
    return this.http.get<TreeNode[]>(this.url + `/${projectId}/` + "files", params)
      .pipe(
        tap(_ => console.log('Pobrano listę dokumentacji.')),
        catchError(this.handleError<TreeNode[]>('Error', [])));
  }

  uploadFiles(files: File[], annotations: string): Observable<FileStatus[]> {
    let projectId = this.Cookie.get("opened_project");
    let user = this.Cookie.get("user_name");
    let fileDescription: FileDescription;
    fileDescription = {annotations: annotations, user: user, projectID: projectId};
    const filesToSend= new FormData();
    for (var file of files)
    {
      filesToSend.append('file', file)
    }
    filesToSend.append('fileInfo', JSON.stringify(fileDescription));
    var params = { headers: this.httpTokenFileUpload.headers };
    return this.http.post<FileStatus[]>(this.url + "/save", filesToSend, params)
      .pipe(
        tap(_ => console.log('Wysłano pliki.')),
        catchError(this.handleError<FileStatus[]>('Error', )));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Błąd podczas pobierania danych');
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


}
