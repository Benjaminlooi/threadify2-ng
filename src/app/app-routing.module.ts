import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadifyComponent } from './components/threadify/threadify.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  { path: '', component: ThreadifyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
