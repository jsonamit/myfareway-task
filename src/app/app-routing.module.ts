import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './components/deshboard/deshboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DeshboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
