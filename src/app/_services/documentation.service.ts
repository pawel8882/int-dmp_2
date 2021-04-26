import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from "@angular/common/http";
import { TreeNode } from 'primeng/api';
import { treeDataDemo } from '../data/treeDataDemo';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  url = 'http://localhost:4200/api/messages';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpToken = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + this.Cookie.get('access_token') }) };

  getDirectories(): Observable<TreeNode[]> {
    let data = of(treeDataDemo);
    return data;
  }


}
