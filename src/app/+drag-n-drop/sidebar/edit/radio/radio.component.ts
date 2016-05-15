import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.css']
})
export class EditRadioComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
