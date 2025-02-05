import { Empleado } from "../Comunes/empleado.interface";
import { Oficina } from "../Comunes/oficina.interface";

export interface ClienteTemporal {
  id: number;
  oficina: Oficina;
  cliente: string;
  direccion: string;
  localidad: string;
  telefono: string;
  correo: string;
  vendedor: Empleado;
  observaciones: string;
  empresa: number;
}
