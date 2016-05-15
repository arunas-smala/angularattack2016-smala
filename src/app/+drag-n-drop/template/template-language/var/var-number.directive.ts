import { 
    ElementRef,
    Directive, 
    OnInit, 
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
    selector: 'var-number,[var-number]',
    exportAs: 'var'
})
export class VarNumberDirective implements OnInit {

    @Input()
    public name: string;

    @Input()
    public title: string;

    @Input()
    public value: any = 0;

    @Input()
    public min: number;

    @Input()
    public max: number;

    @Input()
    public step: number = 1;

    constructor(
        private elementRef:ElementRef,
        private service: DataService
    ) { }

    ngOnInit() {
        var currentScope = this.service.getTraverseCursor();

        var directive = this;
        var variableData = {
            get value () {
                return directive.value;
            },
            set value (val) {
                // TODO: check min max (if set)
                val = Number(val);
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
                value: 'number'
            }
        });


        // Set value to itself to convert to number
        variableData.value = this.value;

        currentScope.variables[ this.name ] = variableData;
        currentScope.variablesArr.push(variableData);
        }

    toString() {
        return this.value;
    }
}
