import { 
    Component, 
    OnInit,
    Input,
    KeyValueDiffers,
    DoCheck
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'edit-content',
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
        if (changes) {
            this.variable.value = Number(this.variable.value);
            if (isNaN(this.variable.value)) {
                this.variable.value = this.variable.defaultValue || 0;
            }

            if (this.variable.min !== undefined && this.variable.value < this.variable.min) {
                this.variable.value = this.variable.min;
            }

            if (this.variable.max !== undefined && this.variable.value > this.variable.max) {
                this.variable.value = this.variable.max;
            }
        }
    }

    ngOnInit() {
        this.variable.step = this.variable.step || 1;
    }

    dec() {
        this.variable.value -= this.variable.step;
    }

    inc() {
        this.variable.value += this.variable.step;
    }
}
