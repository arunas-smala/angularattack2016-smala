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
    template: getTemplate(),
    styleUrls: ['template.component.css'],
    directives: [TEMPLATE_DIRECTIVES],
    encapsulation: ViewEncapsulation.Emulated
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

        var savedData = localStorage.getItem('data');
        if (savedData) {
            try {
                savedData = JSON.parse(savedData);
                var data = this.service.getData();

                if (savedData.variables) {
                    data.variables = data.variables || {};

                    Object.keys(savedData.variables).forEach((key) => {
                        let savedVariable = savedData.variables[key];
                        data.variables[key] = data.variables[key] || {};

                        Object.keys(savedVariable).forEach((varKey) => {
                            data.variables[key][varKey] = savedVariable[varKey];
                        });
                    });
                }
            } catch (err) {
            }
        }
      });
  }

}
