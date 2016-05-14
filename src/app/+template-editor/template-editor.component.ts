import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-template-editor',
    templateUrl: 'template-editor.component.html',
    styleUrls: ['template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {

    public template: string;

    constructor() {}

    ngOnInit() {
        let template = localStorage.getItem('template');

        if (template) {
            this.template = template;
        }
    }

    onSubmit() {
        localStorage.setItem('template', this.template);
    }

}
