import {
    ElementRef,
    Directive,
    OnInit,
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
  selector: 'var-color,[var-color]',
  exportAs: 'var'
})
export class VarColorDirective implements OnInit {

  @Input()
  public name:string;

  @Input()
  public title:string;

  @Input()
  public value:string = '';

  constructor(
      private elementRef:ElementRef,
      private service: DataService
  ) {}

  ngOnInit() {
    var currentScope = this.service.getTraverseCursor();

    var directive = this;
    var variableData = {
      get value () {
        return directive.value;
      },
      set value (val) {
        if (!/^#([a-f0-9]{3}|[a-f0-9]{6})$/i.test(val)) {
          val = '#000000';
        }
        
        directive.value = val;
      }
    };

    Object.defineProperties(variableData, {
      title: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: directive.title
      },
      name: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: directive.name
      },
      type: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 'color'
      }
    });


    // Set value to itself to convert to number
    variableData.value = this.value;

    currentScope.variables[ this.name ] = variableData;
  }

  toString() {
    return this.value;
  }
}
