import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'app-template-editor',
    templateUrl: 'template-editor.component.html',
    providers: [HTTP_PROVIDERS],
    styleUrls: ['template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {

    template:string;

    constructor(private http:Http) {
    }

    ngOnInit() {
        this._loadTemplate();
    }

    onSubmit() {
        if (!this.template) {
            alert('Empty!'); // TODO change to normal alert

            // let's load not empty template
            this._loadTemplate();

            return;
        }

        localStorage.setItem('template', this.template);

        alert('Saved!'); // TODO change to normal alert
    }

    private _loadTemplate() {
        this._getStorageTemplate()
            .then((template) => {
                if (typeof template === 'string') {
                    this.template = template;
                }
            }).catch(() => {
            this._getFileTemplate()
                .subscribe(response => {
                    this.template = response.text()
                });
        })
    }

    private _getStorageTemplate() {
        return new Promise(
            function (resolve, reject) {
                let template = localStorage.getItem('template');
                if (typeof template === 'string') {
                    resolve(template);
                } else {
                    reject();
                }
            }
        );
    }

    private _getFileTemplate() {
        return this.http.get('/default_template.html');
    }
}
