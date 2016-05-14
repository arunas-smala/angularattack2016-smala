import { Injectable } from '@angular/core';
import { Scope } from './scope';

@Injectable()
export class DataService {
    
    private traverseCursor:any;
    private data:any = new Scope();

    constructor() {
    }

    startTraverse() {
        this.traverseCursor = this.data;
    }

    getTraverseCursor() {
        return this.traverseCursor;
    }

    setTraverseCursor( cursor:any ) {
        this.traverseCursor = cursor;
    }

    endTraverse() {
        this.traverseCursor = null;
    }

}
