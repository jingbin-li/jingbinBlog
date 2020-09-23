import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    pragma: 'no-cache',
  }),
  // withCredentials: true
};
@Injectable()
export class LoginService {
  private apiUrl: string;
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
    this.apiUrl = `${this.baseUrl}api/v1/user`;
  }
  public login(loginForm): Observable<any> {
    const url = `${this.apiUrl}/verification`;
    return this.http.post(url, loginForm, httpOptions);
  }
}
