import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { CodemirrorComponent } from './shared/index'
import { getTemplate } from '../shared/templates';

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
    saved:boolean = false;

    constructor(private http:Http) {
    }

    ngOnInit() {
        this.loadTemplate();
    }

    savedTimeout: any;

    save() {
        localStorage.setItem('template', this.template);
        this.saved = true;

        if (this.savedTimeout) {
            clearTimeout(this.savedTimeout);
        }
        this.savedTimeout = setTimeout(() => this.saved = false, 1000);
    }

    reset() {
        localStorage.removeItem('template');
        this.loadTemplate();
    }

    private loadTemplate() {
        this.template = getTemplate();
    }
}
