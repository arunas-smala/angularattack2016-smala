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
export class EditStopsComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
    var that = this;
    document.onkeypress = function () {
      that.variable.value += 1;
    };
  }

}
