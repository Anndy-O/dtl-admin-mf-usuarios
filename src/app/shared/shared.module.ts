import { DashTableComponent } from './components/dash-table/dash-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    DashTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    DashTableComponent
  ],
})
export class SharedModule { }
