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

  constructor(private _service: DataService) {}

  ngOnInit() {
      this._service.startTraverse();
      console.log('template start');
  }

  ngAfterViewInit() {
      this._service.endTraverse();
      console.log('template finish2');
  }

}
