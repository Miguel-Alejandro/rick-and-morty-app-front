import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [

            {
                path:'',
                redirectTo:'character',
            },

            {
                path:'character',
                loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
