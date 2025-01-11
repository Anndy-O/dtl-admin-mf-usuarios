import { Oficina } from './../Comunes/oficina';
export interface Usuario {
  codigoEmpleado: number;
  nombre: string;
  cargo: string;
  oficina:Oficina;
}
