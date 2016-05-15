import { 
    Component, 
    OnInit,
    Input,
    ViewContainerRef,
    ComponentResolver,
    ViewChild
} from '@angular/core';
import { 
    EditInputComponent,
    EditNumberComponent
} from '../index';

@Component({
    selector: 'edit-abstract',
    template: `<div #editContent></div>`
})
export class EditAbstractComponent implements OnInit {

    @Input()
    variable: any;

    @ViewChild('editContent', { read: ViewContainerRef })
    protected contentTarget: ViewContainerRef;

    constructor(private componentResolver: ComponentResolver) {}

    ngOnInit() {
        let EditComponent:any = EditInputComponent;
        
        switch (this.variable.type) {
            case 'number':
                EditComponent = EditNumberComponent;
                break
        }

        this.componentResolver.resolveComponent(EditComponent)
            .then((factory: any) => {
                return this.contentTarget.createComponent(factory)
            })
            .then((component:any) => {
                component.instance.variable = this.variable;
            });
    }

}
