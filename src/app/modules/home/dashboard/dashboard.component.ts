import { Component, OnInit } from '@angular/core';
import { DashTableData } from 'src/app/core/interface/Dashboard/dash-table-data';
import { DashTareas } from 'src/app/core/interface/Dashboard/dash-tareas';
import { DashOrdenServicio } from 'src/app/core/interface/Dashboard/dash-orden-servicio';
import { DashService } from 'src/app/core/service/dash-service/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {

  // Lista principal que contiene sublistas de DashTableData
  tableData: DashTableData[][] = [];

  constructor(private dashService: DashService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    // Lista de sublistas de DashTableData
    const tareasHoy: DashTableData[] = [];
    const tareasPendientes: DashTableData[] = [];
    const ordenesServicios: DashTableData[] = [];
    const ordenesProximas: DashTableData[] = [];

    // Obtener tareas de hoy y asignar a su sublista
    this.dashService.listarTareasHoy().subscribe({
      next: (data: DashTareas[]) => {
        tareasHoy.push(...data.map(tarea => this.mapTareasToTableData(tarea)));
        this.tableData.push(tareasHoy); // Asignar la sublista de tareas hoy
      },
      error: (err) => {
        console.error('Error al obtener tareas de hoy:', err);
      }
    });

    // Obtener tareas pendientes y asignar a su sublista
    this.dashService.listarTareasPendientes().subscribe({
      next: (data: DashTareas[]) => {
        tareasPendientes.push(...data.map(tarea => this.mapTareasToTableData(tarea)));
        this.tableData.push(tareasPendientes); // Asignar la sublista de tareas pendientes
      },
      error: (err) => {
        console.error('Error al obtener tareas pendientes:', err);
      }
    });

    // Obtener órdenes de servicio y asignar a su sublista
    this.dashService.listarOrdenesServicios().subscribe({
      next: (data: DashOrdenServicio[]) => {
        ordenesServicios.push(...data.map(orden => this.mapOrdenesToTableData(orden)));
        this.tableData.push(ordenesServicios); // Asignar la sublista de órdenes de servicio
      },
      error: (err) => {
        console.error('Error al obtener órdenes de servicio:', err);
      }
    });

    // Obtener órdenes próximas y asignar a su sublista
    this.dashService.listarOrdenesServiciosPorFecha().subscribe({
      next: (data: DashOrdenServicio[]) => {
        ordenesProximas.push(...data.map(orden => this.mapOrdenesToTableData(orden)));
        this.tableData.push(ordenesProximas); // Asignar la sublista de órdenes próximas
      },
      error: (err) => {
        console.error('Error al obtener órdenes próximas:', err);
      }
    });
  }

  /**
   * Transforma una tarea en un DashTableData
   * @param tarea DashTareas
   * @returns DashTableData
   */
  private mapTareasToTableData(tarea: DashTareas): DashTableData {
    return {
      id: tarea.tareaId,
      nombre: tarea.descripcionTarea,
      fecha: tarea.fechaEntrega,
      responsable: tarea.nombreEmpleado,
      cliente: tarea.nombreCliente
    };
  }

  /**
   * Transforma una orden de servicio en un DashTableData
   * @param orden DashOrdenServicio
   * @returns DashTableData
   */
  private mapOrdenesToTableData(orden: DashOrdenServicio): DashTableData {
    return {
      id: orden.id,
      nombre: orden.observaciones,
      fecha: orden.fechaServicio,
      responsable: `${orden.tecnico.nombre} ${orden.tecnico.apellido}`,
      cliente: orden.nombreCliente
    };
  }
}



