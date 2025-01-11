import { Usuario } from 'src/app/core/interface/Usuarios/usuario.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly baseUrl = 'http://localhost:8000/admin-usuarios'; // URL de tu API
  private readonly datosEmpleadoUrl = 'assets/datosEmpleado.json'; // URL del archivo JSON



  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    const token = this.authService.getToken();
    console.log('Obteniendo usuarios', token);
    return this.http.get<Usuario[]>(this.datosEmpleadoUrl);


    // const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    // return this.http.get<Usuario[]>(`${this.baseUrl}/listar-empleados`, {headers}).pipe(
    //   catchError((error) => {
    //     console.error('Error al obtener el detalle de la cotización:', error);
    //     return throwError(
    //       () => new Error('Error al obtener el detalle de la cotización.')
    //     );
    //   })

    // );
  }
}


