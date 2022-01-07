import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').
    then( m => m.FeatureModule ),
  },

  {
    path:'dashboard',
    loadChildren: () => 
      import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule ),
  },

  {
    path: 'signup',
    loadChildren: () => 
      import('./pages/signup/signup.module').then( m => m.SignupModule ),
  },

  {
    path:'login',
    loadChildren: () => 
      import('./pages/login/login.module').then( m => m.LoginModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
