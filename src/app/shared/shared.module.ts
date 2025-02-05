import { DashTableComponent } from './components/dash-table/dash-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalEmpleadosComponent } from './components/modales/modal-empleados/modal-empleados.component';
import { FormsModule } from '@angular/forms';
import { MetricasComponent } from './components/metricas/metricas.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { TablaClientesTemporalesComponent } from './components/tabla-clientes-temporales/tabla-clientes-temporales.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    DashTableComponent,
    ModalEmpleadosComponent,
    MetricasComponent,
    TablaClientesComponent,
    TablaClientesTemporalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    DashTableComponent,
    ModalEmpleadosComponent,
    MetricasComponent,
    TablaClientesComponent,
    TablaClientesTemporalesComponent
  ],
})
export class SharedModule { }
