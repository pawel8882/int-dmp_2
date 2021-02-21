import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';
import { token } from '../_class/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }

  redirectUri = 'http://localhost:4200/logging';
  redirectUri_logout = 'http://localhost:4200/';
  clientId = 'account';
  tokenUri = 'http://localhost:8081/auth/realms/int-dmp/protocol/openid-connect/token'
  userInfoUri = 'http://localhost:8081/auth/realms/int-dmp/protocol/openid-connect/userinfo'
  token!: token;
  test!: string;
  

  retrieveToken(code: any) {
    
    let params = new URLSearchParams();
    params.append('client_secret', '83970714-1e6e-498f-a50b-6963b013a28f');
    params.append('client_id', this.clientId);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code);


    let headers =
      new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

    this.http.post<any>(this.tokenUri,
      params.toString(), { headers: headers })
      .subscribe(
        data => this.loginProcess(data),
        error => alert(error.error.message));
  }

  loginProcess(data: any) {
    var sub = new Subject();
    sub.subscribe(
      { next: (data => this.saveToken(data)) });
    sub.subscribe(
      { next: (data => this.getUserInfo(data)) });

    sub.next(data);
  }

  saveToken(token: any) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.Cookie.set("access_token", token.access_token, expireDate);
    this.Cookie.set("id_token", this.clientId, expireDate);
    console.log('Obtained Access token');
    
  }

  saveUserInfo(user: any) {
    this.Cookie.set("user_name", user.preferred_username);
    this.Cookie.set("userinfo", user.name);
    console.log('Obtained user info');
    window.location.href = 'http://localhost:4200';
   
  }

  getUserInfo(token: any) {
    var headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token,
    });
    this.http.post(this.userInfoUri,"" ,{ headers: headers }).subscribe(
      data => this.saveUserInfo(data)), catchError(this.handleError<any>('userInfo'));

  }

  checkCredentials() {
    return this.Cookie.check('access_token');
  }

  login() {
    window.location.href =
      'http://localhost:8081/auth/realms/int-dmp/protocol/openid-connect/auth?response_type=code&client_id=' +
      this.clientId + '&redirect_uri=' + this.redirectUri;
  }

  logout() {
    let token = this.Cookie.get('id_token');
    this.Cookie.delete('access_token');
    this.Cookie.delete('id_token');
    this.Cookie.delete('user_name');
    this.Cookie.delete('opened_project');
    this.Cookie.delete('userinfo');
    let logoutURL = "http://localhost:8081/auth/realms/int-dmp/protocol/openid-connect/logout?redirect_uri="
        + this.redirectUri_logout;
    window.location.href = logoutURL;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Błąd podczas pobierania danych');
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }

  }
  


}


