import { 
    ElementRef,
    Component, 
    OnInit, 
    Input,
    ViewContainerRef,
    ComponentResolver,
    ViewChild,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';
import { Scope } from '../../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'block-template',
    styleUrls: ['./block.component.css'],
    templateUrl: './block.component.html',
    exportAs: 'block'
})
export class BlockDirective implements OnInit {

    @Input()
    public t:string='aaa';

    @Input()
    public name:string = 'bybi';

    @Input()
    public title:string;

    @ViewChild('blockContent', { read: ViewContainerRef })
    protected contentTarget: ViewContainerRef;

    public variables:any;
    public blocks:any;
    public repeaters:any;


    constructor(
        private elementRef:ElementRef,
        private componentResolver: ComponentResolver,
        private service: DataService
    ) {}

    edit() {
        this.service.editBlock(this.variables);
    }

    ngOnInit() {
        var newScope = this.service.getTraverseCursor();

        this.variables = newScope.variables;
        this.blocks = newScope.blocks;
        this.repeaters = newScope.repeaters;

    }

    ngAfterViewInit() {
        var dynamicComponent = this.createContentComponent(this.t || `<div>lll</div>`);
        this.componentResolver.resolveComponent(dynamicComponent)
        .then((factory: any) => {
            return this.contentTarget.createComponent(factory)
        })
        .then((component:any) => {
            component.instance.variables = this.variables;
        });
    }

    createContentComponent(template) {
        @Component({
            selector: 'block-content',
            template: template.replace(/\[\[/gm, '{{').replace(/\]\]/gm, '}}')
        })
        class BlockContent {
            @Input()
            public variables:any;
        }
        return BlockContent;
    }

}

@Component({
    moduleId: module.id,
    selector: 'block',
    directives: [BlockDirective],
    template: `<block-template [name]="name" [title]="title" [t]="test.innerHTML">
            <div #test>
                <ng-content></ng-content>
            </div>
        </block-template>`
})
export class BlockComponent implements OnInit{

    @Input()
    public name:string;

    @Input()
    public title:string;

    public variables:any;
    public blocks:any;
    public repeaters:any;


    constructor(
        private elementRef:ElementRef,
        private componentResolver: ComponentResolver,
        private service: DataService
    ) {}

    ngOnInit() {
        var currentScope = (() => {
            do {
                // Let's get current scope cursor
                var currentScope = this.service.getTraverseCursor();

                // Only rootScope doesn't have element assigned.
                // We must stop if we have reached it
                if (currentScope.element) {
                    // Now we need to check if our element has current scope
                    // element in his parents chain. If it doesn't - we should move
                    // current scope pointer back and do it again.

                    let elementParent = this.elementRef.nativeElement;

                    while (elementParent) {

                        if (elementParent === currentScope.element) {
                            // If we found currentScope element in this element
                            // parent chain - break all loops and leave
                            // currentScope as it is
                            return currentScope;
                        }

                        elementParent = elementParent.parentElement;
                    }

                    // If we get there it means we didn't found currentScope
                    // element in directive's element parent chain. Move
                    // currentScope back and search again untill we reach root
                    // scope or will find element in parent chain.
                    this.service.setTraverseCursorBack();
                }
            } while (currentScope.element);

            return currentScope;
        })();
        
        // Yes, yes, blocks and only blocks create new scopes
        let newScope = new Scope();

        Object.defineProperty(newScope, 'element', {
            value: this.elementRef.nativeElement,
            writable: false,
            enumerable: false,
            configurable: false
        });

        // Assign scope data to be exported
        this.variables = newScope.variables;
        this.blocks = newScope.blocks;
        this.repeaters = newScope.repeaters;

        // Add this block to parent scope
        currentScope.blocks[ this.name ] = newScope;
        // Settings current scope to this block. So new inner blocks will
        // belong to this block
        this.service.setTraverseCursor(newScope);

    }
}

