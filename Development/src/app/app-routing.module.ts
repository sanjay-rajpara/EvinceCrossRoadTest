import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './pages/default.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'default'
  },
    {
        path: 'default',
        component: DefaultComponent
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
