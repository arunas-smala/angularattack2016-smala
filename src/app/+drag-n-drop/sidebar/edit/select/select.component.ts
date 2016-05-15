import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class EditSelectComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
