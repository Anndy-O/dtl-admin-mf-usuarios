import { Oficina } from './oficina';

export interface Empleado {
  id: number;
  oficina: Oficina;
  nombre: string;
  apellido: string;
  codigoEmpleado: string;
  cargo: string;
  fechaIngreso: string; // Usar formato ISO para fechas
  perfilUsuario: string;
  ciudadZona: string;
  correo: string;
  direccion: string;
  celular: string;
  seguroSalud: string;
  grupoSanguineo: string;
  observaciones: string;
  firmaEmpleado: string;
  fotoEmpleado: string;
  empresa: number;
}
