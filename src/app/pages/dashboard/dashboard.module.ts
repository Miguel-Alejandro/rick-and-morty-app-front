import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from 'src/app/modules/commons.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [ DashboardComponent ],
    imports: [ 
        CommonModule,
        CommonsModule,
        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}