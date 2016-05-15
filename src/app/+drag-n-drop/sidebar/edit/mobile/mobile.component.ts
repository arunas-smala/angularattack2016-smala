import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-mobile',
  templateUrl: 'mobile.component.html',
  styleUrls: ['mobile.component.css']
})
export class MobileComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
