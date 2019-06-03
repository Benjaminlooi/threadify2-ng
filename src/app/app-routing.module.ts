import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadifyComponent } from './components/threadify/threadify.component';

const routes: Routes = [
  {path:'', component: ThreadifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
