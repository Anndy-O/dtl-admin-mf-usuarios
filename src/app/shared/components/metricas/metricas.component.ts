import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MetricasService } from 'src/app/core/service/comunes-service/metricas.service';

Chart.register(...registerables);

@Component({
  selector: 'dtl-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {

  constructor(private metricasService: MetricasService) { }

  ngOnInit() {
    this.cargarMetricaAnual();
    this.cargarMetricaMensual();
    this.cargarMetricaCircular();
  }

  cargarMetricaAnual() {
    this.metricasService.obtenerMetricaAnual().subscribe(data => {
      new Chart("metricaAnualCanvas", {
        type: 'bar',
        data: {
          labels: Array.from({ length: 12 }, (_, i) => (i + 1).toString()),
          datasets: [{
            label: 'Metas Anuales',
            data: data,
            backgroundColor: '#43a9bb'
          }]
        }
      });
    });
  }

  cargarMetricaMensual() {
    this.metricasService.obtenerMetricaMensual().subscribe(data => {
      new Chart("metricaMensualCanvas", {
        type: 'line',
        data: {
          labels: Array.from({ length: 7 }, (_, i) => (i + 1).toString()),
          datasets: [{
            label: 'Metas Mensuales',
            data: data,
            borderColor: '#43a9bb',
            fill: false
          }]
        }
      });
    });
  }

  cargarMetricaCircular() {
    this.metricasService.obtenerMetricaCircular().subscribe(data => {
      new Chart("metricaCircularCanvas1", {
        type: 'doughnut',
        data: {
          labels: ['Completadas', 'Pendientes'],
          datasets: [{
            data: data,
            backgroundColor: ['#43a9bb', '#649781']
          }]
        }
      });

      new Chart("metricaCircularCanvas2", {
        type: 'doughnut',
        data: {
          labels: ['Completadas', 'Pendientes'],
          datasets: [{
            data: [data[0], data[1]],
            backgroundColor: ['#43a9bb', '#649781']
          }]
        }
      });
    });
  }

}
