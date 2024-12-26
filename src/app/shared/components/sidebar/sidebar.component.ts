import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dtl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    { icon: 'fa fa-home', text: 'Inicio' },
    { icon: 'fa fa-cog', text: 'Configuración' },
  ];
}
