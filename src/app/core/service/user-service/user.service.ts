import { Usuario } from 'src/app/core/interface/Usuarios/usuario.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../../interface/Comunes/empleado';
import { UsuarioRequest } from '../../interface/Usuarios/usuario.request';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private readonly baseUrl = '/usuarios/admin-usuarios'; // URL de tu API

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.baseUrl}/listar-usuarios`, { withCredentials: true });
  }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}/listar-empleados`, { withCredentials: true });
  }

  crearUsuario(usuarioRequest: UsuarioRequest): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/registrar-usuario`, usuarioRequest, { withCredentials: true });
  }
}


