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
                if (val > 40) { 
                    val = 40;
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

        //        variableData.meta.title = this.title;
        //        variableData.meta.name = this.name;
        //        variableData.meta.type = 'number';

        currentScope.variables[ this.name ] = variableData;
        currentScope.variablesArr.push(variableData);
        }

    toString() {
        return this.value;
    }
}
