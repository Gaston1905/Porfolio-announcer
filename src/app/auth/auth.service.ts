import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
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

  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
}
