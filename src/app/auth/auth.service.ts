import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private url = environment.apiUrl;

  constructor(private cookies: CookieService, private _http: HttpClient) {}

  ngOnInit(): void {}

  login(payload: any): Observable<any> {
    return this._http.post<any>(`${this.url}login`, payload);
  }

  logout(token: any) {
    // Utilizar replace() para eliminar las comillas al principio y al final del token
    const parsedToken = JSON.parse(token).replace(/^"|"$/g, '');
    // Configuración de header
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + parsedToken);

    return this._http.post<any>(`${this.url}logout`, {}, { headers });
  }

  setToken(token: string) {
    const tokenJson = JSON.stringify(token);
    this.cookies.set('token_announcer', tokenJson);
  }

  getToken() {
    console.log(this.cookies.get('token'));
    return this.cookies.get('token_announcer');
  }

  removeToken() {
    this.cookies.delete('token_announcer');
  }
}
