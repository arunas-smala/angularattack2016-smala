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
    EditImageComponent,
    EditNumberComponent,
    EditCheckboxComponent,
    EditColorComponent,
    EditDateComponent,
    EditLinkComponent,
    EditMobileComponent,
    EditRadioComponent,
    EditSelectComponent,
    EditStopsComponent,
    EditTextareaComponent
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
                break;
            case 'image':
                EditComponent = EditImageComponent;
                break;
            case 'checkbox':
                EditComponent = EditCheckboxComponent;
                break;
            case 'color':
                EditComponent = EditColorComponent;
                break;
            case 'date':
                EditComponent = EditDateComponent;
                break;
            case 'link':
                EditComponent = EditLinkComponent;
                break;
            case 'mobile':
                EditComponent = EditMobileComponent;
                break;
            case 'radio':
                EditComponent = EditRadioComponent;
                break;
            case 'select':
                EditComponent = EditSelectComponent;
                break;
            case 'stops':
                EditComponent = EditStopsComponent;
                break;
            case 'textarea':
                EditComponent = EditTextareaComponent;
                break;
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
