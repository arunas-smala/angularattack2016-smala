import { Injectable } from '@angular/core';
import { Scope } from './scope';

@Injectable()
export class DataService {
    
    private previousCursors:any[] = [];
    private traverseCursor:any = null;
    private data:any = new Scope();

    public selectedBlock:any = {};

    constructor() {
        Object.defineProperty(this.data, 'traverseDone', {
            enumerable: false,
            configurable: false,
            writable: true,
            value: false
        });
    }

    editBlock(variables) {
        this.selectedBlock.variables = variables;
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
        this.data.traverseDone = true;
    }

    getData() {
        return this.data;
    }

}
