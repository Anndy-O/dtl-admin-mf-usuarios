import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth-service/auth.service';
import { LocalStorageDataService } from 'src/app/core/service/comunes-service/local-storage-data.service';

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

  usuario: string;

  constructor(
    private authService: AuthService,
    private localStorageDataService: LocalStorageDataService
    ) {
      this.usuario = this.localStorageDataService.getUsuario();
    }

  logOut() {
    this.authService.logOut();
  }
}
