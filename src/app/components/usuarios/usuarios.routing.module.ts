import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', 
        component: LoginComponent,
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
export class UsuariosRoutingModule { }