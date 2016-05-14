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
    public value: number = 0;

    @Input()
    public min: number;

    @Input()
    public max: number;

    @Input()
    public step: number = 1;

    private scopeData: any;

    constructor(
        private elementRef:ElementRef,
        private service: DataService
    ) { }

    ngOnInit() {
        var currentScope = this.service.getTraverseCursor();
        var directive = this;
        this.scopeData = {
            get value () {
                return directive.value;
            },
            set value (val) {
                directive.value = val;
            }
        };


        this.scopeData.value = 15;

        currentScope.variables[ this.name ] = this.scopeData;
        
        setTimeout( () => {
            this.scopeData.value = 12;
        }, 8000 );
    }

    toString() {
        return this.value;
    }
}
