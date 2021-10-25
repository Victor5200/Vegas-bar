import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExemploComponent} from "./exemplo/exemplo.component";

const routes: Routes = [
  { path: "", component: ExemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
