import { Injectable } from '@angular/core';
import { JwtResponse } from '../../interface/auth-interfaces/jwt-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {

constructor() { }

  getUserData(): JwtResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getEmpresaId(): number {
    const user = this.getUserData();
    return user ? user.empresaId : 0;
  }

  getOficinaId(): number {
    const user = this.getUserData();
    return user ? user.oficinaId : 0;
  }

  getUsuario(): string {
    const user = this.getUserData();
    return user ? user.usuario : '';
  }
}
