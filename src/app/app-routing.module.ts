import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';


const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
  {component: CounterComponent, path:"counter"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
