import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebComponent } from './web.component';
import { WebRoutingModule } from './web.routing.module';
import { ComponentsModule } from '../components/component.module';

@NgModule({
    declarations: [WebComponent],
    imports: [
        WebRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [],
    providers: [],
})
export class WebModule { }
