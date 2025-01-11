import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RegistroEmpleadoComponent } from './registros/registro-empleado/registro-empleado.component';
import { RegistroUsuarioComponent } from './registros/registro-usuario/registro-usuario.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [

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
