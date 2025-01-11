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
        this.storeUserData(response);
      })
    );
  }

  private storeUserData(response: JwtResponse): void {
    localStorage.setItem('user', JSON.stringify(response));
  }

  getUserData(): JwtResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    const user = this.getUserData();
    return user ? user.token : null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const expirationDate = this.getTokenExpirationDate(token);
    if (expirationDate === null) return false;

    return expirationDate > new Date();
  }

  // Obtener la fecha de expiración del token
  private getTokenExpirationDate(token: string): Date | null {
    const decoded = this.decodeToken(token);
    if (!decoded.exp) return null;

    const expirationDate = new Date(0); // El 0 es porque el valor de exp es en segundos, y lo convertimos a milisegundos
    expirationDate.setUTCSeconds(decoded.exp);
    return expirationDate;
  }

  // Decodificar el JWT para obtener los datos del payload
  private decodeToken(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token');
    }
    const decoded = atob(parts[1]);
    return JSON.parse(decoded);
  }
}
