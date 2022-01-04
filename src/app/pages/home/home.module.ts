import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonsModule } from 'src/app/modules/commons.module';


@NgModule({
    declarations: [ HomeComponent ],
    imports: [ CommonModule, HomeRoutingModule, CommonsModule ],
    exports: [],
    providers: [],
})
export class FeatureModule {}