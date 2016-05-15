import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ValuesPipe } from '../../shared/values.pipe';
import { 
    EditAbstractComponent,
    EditInputComponent,
    EditNumberComponent
} from './edit/index';

@Component({
    moduleId: module.id,
    selector: 'tb-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    pipes: [
        ValuesPipe
    ],
    directives: [
        EditAbstractComponent,
        EditInputComponent,
        EditNumberComponent
    ]
})
export class SidebarComponent implements OnInit {
    public showDebug: boolean = false;
    public data: any;

    constructor(private service: DataService) {
        this.data = this.service.getData();
    }

    ngOnInit() {
    }

    saveData() {
        localStorage.setItem('data', JSON.stringify(this.data));
    }

}
