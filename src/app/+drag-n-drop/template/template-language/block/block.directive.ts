import { 
    Component, 
    Directive, 
    OnInit, 
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';
import { Scope } from '../../../shared/index';

@Directive({
    selector: 'block,[block]',
    exportAs: 'block'
})
export class BlockDirective implements OnInit {

    @Input()
    public name:string;

    @Input()
    public title:string;

    public variables:any;
    public blocks:any;
    public repeaters:any;

    private parentScope:any;

    constructor(
        private service: DataService
    ) {}

    ngOnInit() {
        // Temporary store current active scope, so we would be able to restore
        // it after this block will be compiled
        this.parentScope = this.service.getTraverseCursor();
        // Yes, yes, blocks and only blocks create new scopes
        let newScope = new Scope();

        // Assign scope data to be exported
        this.variables = newScope.variables;
        this.blocks = newScope.blocks;
        this.repeaters = newScope.repeaters;

        // Add this block to parent scope
        this.parentScope.blocks[ this.name ] = newScope;
        // Settings current scope to this block. So new inner blocks will
        // belong to this block
        this.service.setTraverseCursor(newScope);
    }

    ngAfterViewInit() {
        // Restore old scope
        this.service.setTraverseCursor(this.parentScope);
    }

}
