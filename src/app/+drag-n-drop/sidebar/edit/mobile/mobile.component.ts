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
export class EditMobileComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
    this.updateVariableVal();

    var that = this;

    window.onresize = function(event) {
      that.updateVariableVal();
    };
  }

  updateVariableVal() {
    if (window.innerWidth <= 768) {
      this.variable.value = true;
    }
  }
}
