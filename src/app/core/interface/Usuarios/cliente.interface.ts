import { Empleado } from "../Comunes/empleado.interface";
import { Oficina } from "../Comunes/oficina.interface";

export interface Cliente {
  id: number;
  oficina: Oficina;
  cliente: string;
  codigoCliente: string;
  status: string;
  tipoCliente: string;
  vendedor: Empleado;
  referido: string;
  direccion: string;
  celular: string;
  correo: string;
  contactoAdmin: string;
  direccionComercial: string;
  fecha: string;
  llamadaSeguimientoFecha: string;
  llamadaSeguimientoHora: string;
  observaciones: string;
  empresa: number;
}
