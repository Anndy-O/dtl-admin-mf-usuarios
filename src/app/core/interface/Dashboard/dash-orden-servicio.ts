import { Empleado } from "../Comunes/empleado";
import { Empresa } from "../Comunes/empresa";
import { Oficina } from "../Comunes/oficina";

export interface DashOrdenServicio {
  id: number;
  numero: string;
  estatus: string;
  codigo: string;
  fechaServicio: string; // Usar formato ISO para fechas
  horaInicio: string; // Usar formato HH:mm:ss para horas
  horaFin: string; // Usar formato HH:mm:ss para horas
  duracionEstimada: string;
  tipoServicioId: number[];
  contactoServicio: string;
  nombreCliente: string;
  statusConfirmacion: string;
  valorServicio: number;
  facturacion: string;
  activo: string;
  observaciones: string;
  tecnico: Empleado;
  oficina: Oficina;
  empresa: Empresa;
}
