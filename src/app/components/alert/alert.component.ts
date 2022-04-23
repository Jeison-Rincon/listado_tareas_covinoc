import { Component, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})

export class AlertComponent implements OnInit, OnChanges {

    @Input('type') type:string = '';
    @Input('message') message:string = '';

    constructor(
        protected render:Renderer2
    ) { }

    ngOnInit() { 
        const elem = document.getElementById('alert');
        this.render.addClass(elem,'hidden_animate');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['message'].previousValue != changes['message'].currentValue){
            const elem = document.getElementById('alert');
            this.render.addClass(elem,'hidden_animate');
        }
    }
}