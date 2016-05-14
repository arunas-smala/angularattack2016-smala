import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'template-builder-app',
  templateUrl: 'template-builder.component.html',
  styleUrls: ['template-builder.component.css'],
  directives: [AlertComponent]
})
export class TemplateBuilderAppComponent {
  title = 'template-builder works!';
}
