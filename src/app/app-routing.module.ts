import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:'home',
    canActivate:[SessionGuard],
    loadChildren: () => import('./pages/home/home.module').
    then( m => m.HomeModule ),
  },

  {
    path:'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () => 
      import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule ),
  },

  {
    path: 'signup',
    canActivate:[SessionGuard],
    loadChildren: () => 
      import('./pages/signup/signup.module').then( m => m.SignupModule ),
  },

  {
    path:'login',
    canActivate:[SessionGuard],
    loadChildren: () => 
      import('./pages/login/login.module').then( m => m.LoginModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
