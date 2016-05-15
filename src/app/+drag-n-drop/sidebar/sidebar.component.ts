import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { 
    EditInputComponent,
    EditNumberComponent,
} from './edit/index';

@Component({
    moduleId: module.id,
    selector: 'tb-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    directives: [
        EditInputComponent,
        EditNumberComponent
    ]
})
export class SidebarComponent implements OnInit {
    public showDebug: boolean = false;
    public data: any;

    constructor(private service: DataService) {
    }

    ngOnInit() {
        this.data = this.service.getData();
    }

}
