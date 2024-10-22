
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Auth } from '../../interface/auth-interfaces/auth.interface';
import { JwtResponse } from '../../interface/auth-interfaces/jwt-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8002/dtl/auth/login';

  constructor(private http: HttpClient) {}

  login(authData: Auth): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.apiUrl, authData).pipe(
      tap((response: JwtResponse) => {
        this.storeToken(response.token);
      })
    );
  }

  private storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
