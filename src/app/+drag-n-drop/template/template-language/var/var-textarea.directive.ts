import {
    ElementRef,
    Directive,
    OnInit,
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
  selector: 'var-textarea,[var-textarea]',
  exportAs: 'var'
})
export class VarTextareaDirective implements OnInit {

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
        value: 'textarea'
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
