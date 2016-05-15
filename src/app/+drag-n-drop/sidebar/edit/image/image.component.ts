import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.css']
})
export class EditImageComponent implements OnInit {

  @Input()
  variable: any;
  
  constructor() {}

  ngOnInit() {
  }

}
