import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashTableData } from 'src/app/core/interface/Dashboard/dash-table-data';

@Component({
  selector: 'dash-table',
  templateUrl: './dash-table.component.html',
  styleUrls: ['./dash-table.component.css']
})
export class DashTableComponent implements OnChanges {
  @Input() data: DashTableData[] = [];
  @Input() headerColor: string = '#000000';
  @Input() tableName: string = 'NOMBRE TABLA';

  currentPage: number = 1; // Página actual
  itemsPerPage: number = 3 ; // Número de registros por página
  paginatedData: DashTableData[] = []; // Datos a mostrar en la página actual

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePaginatedData();
  }

  // Actualiza los datos según la página actual
  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  // Cambia a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  // Cambia a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  // Calcula el número total de páginas
  totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }
}
