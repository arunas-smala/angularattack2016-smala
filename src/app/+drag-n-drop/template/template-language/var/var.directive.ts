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

        var directive = this;
        var variableData = {
            get value () {
                return directive.value;
            },
            set value (val) {
                // TODO: length
                directive.value = val;
            }
        };

        Object.defineProperties(variableData, {
            title: {
                enumerable: false,
                writable: true,
                configurable: false,
                value: directive.title
            },
            name: {
                enumerable: false,
                writable: true,
                configurable: false,
                value: directive.name
            },
            type: {
                enumerable: false,
                writable: true,
                configurable: false,
                value: 'input'
            }
        });

        currentScope.variables[ this.name ] = variableData;
        currentScope.variablesArr.push(variableData);

    }

    toString() {
        return this.value;
    }
}
