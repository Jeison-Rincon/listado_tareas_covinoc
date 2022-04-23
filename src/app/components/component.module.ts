import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NewHomeworkComponent } from './new-homework/new-homework.component';
import { ListComponent } from './list/list.component';
import { AlertComponent } from './alert/alert.component';

const declarationsComponents = [
    NewHomeworkComponent,
    ListComponent,
    AlertComponent
]

@NgModule({
    declarations: [declarationsComponents],
    exports: [declarationsComponents],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class ComponentsModule { }
