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
    variable: any;

    constructor() {}

    ngOnInit() {
    }

}
