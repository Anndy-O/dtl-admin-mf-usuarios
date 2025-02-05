import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricasService {

  constructor() { }

  obtenerMetricaAnual(): Observable<number[]> {
    const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
    return of(data);
  }

  obtenerMetricaMensual(): Observable<number[]> {
    const data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 1);
    return of(data);
  }

  obtenerMetricaCircular(): Observable<number[]> {
    const total = 100;
    const completadas = Math.floor(Math.random() * total);
    const pendientes = total - completadas;
    return of([completadas, pendientes], [completadas*0.5, pendientes*0.5]);
  }
}
