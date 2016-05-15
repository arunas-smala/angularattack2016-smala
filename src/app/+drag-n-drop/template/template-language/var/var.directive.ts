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

    @Input('max-length')
    public maxLength:number = 0;

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
                if (this.maxLength && val.length > this.maxLength) {
                    val = val.slice(0, this.maxLength);
                }

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

        if (this.maxLength && Number(this.maxLength) > 0) {
            this.maxLength = Number(this.maxLength);
            Object.defineProperty(variableData, 'maxLength', {
                enumerable: false,
                writable: true,
                configurable: false,
                value: this.maxLength
            });
        }

        // Set value to itself to convert to number
        variableData.value = this.value;

        currentScope.variables[ this.name ] = variableData;
    }

    toString() {
        return this.value;
    }
}
