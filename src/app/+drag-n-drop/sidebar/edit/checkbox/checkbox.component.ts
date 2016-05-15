import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css']
})
export class EditCheckboxComponent implements OnInit {
  
  @Input()
  variable: any;
  
  constructor() {}

  ngOnInit() {
  }

  toggleSelection(option) {
    if (this.variable.values.indexOf(option) === -1) {
      this.variable.values.push(option);
    } else {
      let index = this.variable.values.indexOf(option);
      this.variable.values.splice(index, 1);
    }

    this.variable.value = this.variable.values.join(', ');
  }
}
