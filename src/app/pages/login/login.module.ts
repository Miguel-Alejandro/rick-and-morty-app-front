import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CommonsModule } from 'src/app/modules/commons.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [ LoginComponent ],

    imports: [ 
        CommonModule ,
        CommonsModule,
        LoginRoutingModule
    ],
    exports: [],
    providers: [],
})
export class LoginModule {}