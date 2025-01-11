import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { RegistroUsuarioComponent } from './registros/registro-usuario/registro-usuario.component';
import { RegistroEmpleadoComponent } from './registros/registro-empleado/registro-empleado.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashBoardComponent,
    RegistroUsuarioComponent,
    RegistroEmpleadoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class HomeModule { }
