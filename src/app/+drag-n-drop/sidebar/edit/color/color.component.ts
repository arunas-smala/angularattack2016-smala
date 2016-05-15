import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-color',
  templateUrl: 'color.component.html',
  styleUrls: ['color.component.css']
})
export class EditColorComponent implements OnInit {

  @Input()
  variable: any;
  
  constructor() {}

  ngOnInit() {
  }

}
