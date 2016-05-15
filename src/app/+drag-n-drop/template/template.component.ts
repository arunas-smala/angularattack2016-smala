import { 
    Component, 
    OnInit, 
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';
import { TEMPLATE_DIRECTIVES } from './template-language/index';
import { BlockComponent } from './template-language/block/block.directive';
import { DataService } from '../shared/data.service';
import { getTemplate } from '../../shared/templates';

@Component({
    moduleId: module.id,
    selector: 'tb-template',
    template: getTemplate().replace(/\[\[/gm, '{{').replace(/\]\]/gm, '}}'),
    styleUrls: ['template.component.css'],
    directives: [TEMPLATE_DIRECTIVES, BlockComponent],
    encapsulation: ViewEncapsulation.Native
})
export class TemplateComponent implements OnInit, AfterViewInit {

  constructor(private service: DataService) {}

  public variables:any;

  ngOnInit() {
      this.service.startTraverse();
      this.variables = this.service.getData().variables;
  }

  ngAfterViewInit() {
      setTimeout(() => {
        this.service.endTraverse();
      });
  }

}
