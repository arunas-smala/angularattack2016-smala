import { 
    Component, 
    OnInit,
    Input,
    KeyValueDiffers,
    DoCheck
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'edit-number',
    templateUrl: 'number.component.html',
    styleUrls: ['number.component.css']
})
export class EditNumberComponent implements OnInit, DoCheck {

    @Input()
    variable: any;

    differ: any;

    constructor(differs: KeyValueDiffers) {
        this.differ = differs.find({}).create(null);
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.variable);
        console.log('looking for changes');
        if (changes) {
            console.log(changes, 'changes found');
            debugger;
        }
    }

    ngOnInit() {
        this.variable.inc = this.variable.inc || 1;
    }

    dec() {
        this.variable.value -= this.variable.inc;
    }

    inc() {
        this.variable.value += this.variable.inc;
    }
}
