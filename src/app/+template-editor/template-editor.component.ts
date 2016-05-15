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
    confirmReset:boolean = false;

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

    confirmResetTimeout: any;
    reset() {
        if (!this.confirmReset) {
            this.confirmReset = true;

            if (this.confirmResetTimeout) {
                clearTimeout(this.confirmResetTimeout);
            }
            this.savedTimeout = setTimeout(() => this.confirmReset = false, 5000);
        } else {
            localStorage.removeItem('template');
            this.confirmReset = false;
            clearTimeout(this.confirmResetTimeout);
            this.loadTemplate();
        }
    }

    private loadTemplate() {
        this.template = getTemplate();
    }
}
