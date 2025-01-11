import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { RegistroEmpleadoComponent } from './registros/registro-empleado/registro-empleado.component';
import { RegistroUsuarioComponent } from './registros/registro-usuario/registro-usuario.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: DashBoardComponent,
      },
      {
        path: 'registro-empleado',
        component: RegistroEmpleadoComponent,
      },
      {
        path: 'registro-usuario',
        component: RegistroUsuarioComponent,
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
