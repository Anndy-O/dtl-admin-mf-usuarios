import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashTareas } from '../../interface/Dashboard/dash-tareas';
import { DashOrdenServicio } from '../../interface/Dashboard/dash-orden-servicio';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  private readonly baseUrlTareas = '/comunes/admin-comunes/tareas'; // Cambiado
  private readonly baseUrlOrdenes = '/ventas/admin-ordenes-servicios'; // Cambiado

  constructor(private http: HttpClient) {}

  listarTareasHoy(): Observable<DashTareas[]> {
    return this.http.get<DashTareas[]>(`${this.baseUrlTareas}/listar-tareas-hoy`, { withCredentials: true });
  }

  listarTareasPendientes(): Observable<DashTareas[]> {
    return this.http.get<DashTareas[]>(`${this.baseUrlTareas}/listar-tareas-pendientes`, { withCredentials: true });
  }

  listarOrdenesServicios(): Observable<DashOrdenServicio[]> {
    return this.http.get<DashOrdenServicio[]>(`${this.baseUrlOrdenes}/servicio/listar`, { withCredentials: true });
  }

  listarOrdenesServiciosPorFecha(): Observable<DashOrdenServicio[]> {
    return this.http.get<DashOrdenServicio[]>(`${this.baseUrlOrdenes}/servicio/servicios-proximos`, { withCredentials: true });
  }
}
