import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-stops',
  templateUrl: 'stops.component.html',
  styleUrls: ['stops.component.css']
})
export class StopsComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
