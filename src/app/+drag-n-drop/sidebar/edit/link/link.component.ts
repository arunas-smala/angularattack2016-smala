import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.css']
})
export class LinkComponent implements OnInit {

  @Input()
  variable: any;

  constructor() {}

  ngOnInit() {
  }

}
