import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-date',
  templateUrl: 'date.component.html',
  styleUrls: ['date.component.css']
})
export class EditDateComponent implements OnInit {

  @Input()
  variable: any;
  
  constructor() {}

  ngOnInit() {
  }

}
