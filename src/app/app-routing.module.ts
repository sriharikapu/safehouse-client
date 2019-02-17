import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAvatarComponent } from './create-avatar/create-avatar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'create', component: CreateAvatarComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
