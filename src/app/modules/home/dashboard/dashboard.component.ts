import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  tableData: DashTableData[][] = [[], [], [], []];

  constructor(private dashService: DashService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.dashService.listarTareasHoy().subscribe({
      next: (data: DashTareas[]) => {
        this.updateTableData(0, data.map(t => this.mapTareasToTableData(t)));
      },
      error: (err) => console.error('Error al obtener tareas de hoy:', err)
    });

    this.dashService.listarTareasPendientes().subscribe({
      next: (data: DashTareas[]) => {
        this.updateTableData(1, data.map(t => this.mapTareasToTableData(t)));
      },
      error: (err) => console.error('Error al obtener tareas pendientes:', err)
    });

    this.dashService.listarOrdenesServicios().subscribe({
      next: (data: DashOrdenServicio[]) => {
        this.updateTableData(2, data.map(o => this.mapOrdenesToTableData(o)));
      },
      error: (err) => console.error('Error al obtener órdenes de servicio:', err)
    });

    this.dashService.listarOrdenesServiciosPorFecha().subscribe({
      next: (data: DashOrdenServicio[]) => {
        this.updateTableData(3, data.map(o => this.mapOrdenesToTableData(o)));
      },
      error: (err) => console.error('Error al obtener órdenes próximas:', err)
    });
  }

  updateTableData(index: number, newData: DashTableData[]) {
    this.tableData[index] = newData;
    this.tableData = [...this.tableData]; // Forzar nueva referencia
    this.cdr.detectChanges(); // Forzar detección de cambios
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



