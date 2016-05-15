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
                val = Number(val);

                if (isNaN(val)) {
                    val = this.defaultValue || 0;
                }

                if (this.min !== undefined && val < this.min) {
                    val = this.min;
                }

                if (this.max !== undefined && val > this.max) {
                    val = this.max;
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
                value: 'number'
            }
        });

        if (this.step !== undefined) {
            this.step = Number(this.step);
            Object.defineProperty(variableData, 'step', {
                enumerable: false,
                writable: true,
                configurable: false,
                value: this.step
            });
        }

        if (this.min !== undefined) {
            this.min = Number(this.min);
            Object.defineProperty(variableData, 'min', {
                enumerable: false,
                writable: true,
                configurable: false,
                value: this.min
            });
        }

        if (this.max !== undefined) {
            this.max = Number(this.max);
            Object.defineProperty(variableData, 'max', {
                enumerable: false,
                writable: true,
                configurable: false,
                value: this.max
            });
        }

        if (this.min !== undefined && this.max !== undefined && this.min > this.max) {
            delete variableData['min'];
            delete variableData['max'];
            this.min = undefined;
            this.max = undefined;
        }

        // Set value to itself to convert to number
        variableData.value = this.value;

        Object.defineProperty(variableData, 'defaultValue', {
            enumerable: false,
            writable: true,
            configurable: false,
            value: this.value
        });

        currentScope.variables[ this.name ] = variableData;
    }

    toString() {
        return this.value;
    }
}
