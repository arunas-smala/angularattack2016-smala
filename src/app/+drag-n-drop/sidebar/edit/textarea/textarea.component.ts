import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-textarea',
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.css']
})
export class EditTextareaComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
