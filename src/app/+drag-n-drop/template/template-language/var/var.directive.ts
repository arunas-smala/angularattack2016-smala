import { 
    ElementRef,
    Directive, 
    OnInit, 
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
    selector: 'var,[var]',
    exportAs: 'var'
})
export class VarDirective implements OnInit {

    @Input()
    public name:string;

    @Input()
    public title:string;

    @Input()
    public value:string = '';

    constructor(
        private elementRef:ElementRef,
        private service: DataService
    ) {}

    ngOnInit() {
        var currentScope = this.service.getTraverseCursor();
        currentScope.variables[ this.name ] = {
            value: this.value
        };
    }

    toString() {
        return this.value;
    }
}
