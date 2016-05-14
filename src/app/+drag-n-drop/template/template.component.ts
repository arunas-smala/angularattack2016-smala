import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tb-template',
    templateUrl: 'template.component.html',
    styleUrls: ['template.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class TemplateComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
