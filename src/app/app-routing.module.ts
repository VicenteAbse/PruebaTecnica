import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroesComponent } from './superheroes/superheroes.component';

const routes: Routes = [
  {path: 'superheroes', component: SuperheroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
