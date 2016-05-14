import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TEMPLATE_DIRECTIVES } from './template-language/index';

@Component({
    moduleId: module.id,
    selector: 'tb-template',
    templateUrl: 'template.component.html',
    styleUrls: ['template.component.css'],
    directives: [TEMPLATE_DIRECTIVES],
    encapsulation: ViewEncapsulation.Native
})
export class TemplateComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
