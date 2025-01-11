import { Component, OnInit, Inject } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/user-service/user.service';
import { Usuario } from 'src/app/core/interface/Usuarios/usuario.interface';



@Component({
  selector: 'btl-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(@Inject(UsuarioService) private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
      },
      error: (err: any) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
}
