import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { CommonsModule } from 'src/app/modules/commons.module';

@NgModule({
    declarations: [ SignupComponent ],
    imports: [ 
        CommonModule,
        SignupRoutingModule,
        CommonsModule
    ],
    exports: [],
    providers: [],
})
export class SignupModule {}