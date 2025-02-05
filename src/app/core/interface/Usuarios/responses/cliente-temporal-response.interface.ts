import { Empleado } from "../../Comunes/empleado.interface";

export interface ClienteTemporalResponse {
  cliente: string;
  direccion: string;
  localidad: string;
  telefono: string;
  correo: string;
  vendedor: Empleado;
}
