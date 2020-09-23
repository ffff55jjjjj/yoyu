import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';


const routes: Routes = [
  {path: '',redirectTo:'/main',pathMatch:'full'},
  {path:'main',component:HomeMainComponent},
  {path:'index',component:HomeMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
