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
export class CheckboxComponent implements OnInit {
  
  @Input()
  variable: any;
  
  constructor() {}

  ngOnInit() {
  }

}
