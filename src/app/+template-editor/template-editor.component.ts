import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { CodemirrorComponent } from './shared/index'
import { localTemplate, fileTemplate } from './../shared/templates';

@Component({
    moduleId: module.id,
    selector: 'app-template-editor',
    templateUrl: 'template-editor.component.html',
    providers: [HTTP_PROVIDERS],
    styleUrls: ['template-editor.component.css'],
    directives: [CodemirrorComponent]
})

export class TemplateEditorComponent implements OnInit {
    template:string;

    constructor(private http:Http) {
    }

    ngOnInit() {
        this.loadTemplate();
    }

    save() {
        console.log('save');
        localStorage.setItem('template', this.template);
    }

    reset() {
        console.log('reset');
        localStorage.removeItem('template');
        this.loadTemplate();
    }

    private loadTemplate() {
        this.template = localTemplate() || fileTemplate();
    }
}
