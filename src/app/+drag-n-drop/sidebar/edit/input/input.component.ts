import { 
    Component, 
    OnInit,
    Input
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'edit-content',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})
export class EditInputComponent implements OnInit {

    @Input()
    variable: any = {
        value: '1',
        name: '2',
        title: '3'
    };

    constructor() {}

    ngOnInit() {
    }

}
