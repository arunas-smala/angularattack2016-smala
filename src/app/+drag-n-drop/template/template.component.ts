import { 
    Component, 
    OnInit, 
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';
import { TEMPLATE_DIRECTIVES } from './template-language/index';
import { DataService } from '../shared/data.service';

@Component({
    moduleId: module.id,
    selector: 'tb-template',
    templateUrl: 'template.component.html',
    styleUrls: ['template.component.css'],
    directives: [TEMPLATE_DIRECTIVES],
    encapsulation: ViewEncapsulation.Native
})
export class TemplateComponent implements OnInit, AfterViewInit {

  constructor(private service: DataService) {}

  ngOnInit() {
      this.service.startTraverse();
  }

  ngAfterViewInit() {
      this.service.endTraverse();
  }

}
