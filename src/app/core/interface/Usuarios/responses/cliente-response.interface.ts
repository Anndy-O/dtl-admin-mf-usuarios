import { Empleado } from "../../Comunes/empleado.interface";

export interface ClienteResponse {
  cliente: string;
  codigoCliente: string;
  status: string;
  vendedor: Empleado;
  correo: string;
  celular: string;
  direccion: string;
}
