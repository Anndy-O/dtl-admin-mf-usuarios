import { Empleado } from "../Comunes/empleado.interface";
import { Empresa } from "../Comunes/empresa.interface";
import { Oficina } from "../Comunes/oficina.interface";

export interface DashOrdenServicio {
  id: number;
  numero: string;
  estatus: string;
  codigo: string;
  fechaServicio: string;
  horaInicio: string;
  horaFin: string;
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
