import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CommonsModule } from 'src/app/modules/commons.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
    declarations: [ HomeComponent ],

    imports: [ 
        CommonModule,
        CommonsModule,
        HomeRoutingModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}