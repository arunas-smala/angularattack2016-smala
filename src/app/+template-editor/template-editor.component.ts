import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-template-editor',
    templateUrl: 'template-editor.component.html',
    styleUrls: ['template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('init');
    }

}
