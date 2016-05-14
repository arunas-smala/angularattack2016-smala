import { Injectable } from '@angular/core';
import { Scope } from './scope';

@Injectable()
export class DataService {
    
    private previousCursors:any[] = [];
    private traverseCursor:any = null;
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
        this.previousCursors.push( this.traverseCursor );
        this.traverseCursor = cursor;
    }

    setTraverseCursorBack() {
        let prevCursor = this.previousCursors.pop();
        
        if (prevCursor) {
            this.traverseCursor = prevCursor;
        } else {
            this.traverseCursor = null;
        }
    }

    endTraverse() {
        this.traverseCursor = null;
        this.previousCursors = null;
    }

    getData() {
        return this.data;
    }

}
