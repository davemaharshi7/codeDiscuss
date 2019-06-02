import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },

  { path: 'ide', loadChildren: './ide/ide.module#IdeModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
