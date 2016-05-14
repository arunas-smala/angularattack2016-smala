import { Directive, OnInit, Input } from '@angular/core';

@Directive({
    selector: 'block,[block]'
})
export class BlockDirective implements OnInit {

    @Input()
    public name: string;

    @Input()
    public title: string;

    constructor() {}

    ngOnInit() {
        console.log('we have it', this.name);
    }

}
