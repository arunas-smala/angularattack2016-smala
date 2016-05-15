import {
    ElementRef,
    Directive,
    OnInit,
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
  selector: 'var-radio,[var-radio]',
  exportAs: 'var'
})
export class VarRadioDirective implements OnInit {

  @Input()
  public name:string;

  @Input()
  public title:string;

  @Input()
  public options:string;

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
        if (this['options']) {
          if (this['options'].indexOf(val) === -1) {
            val = this['options'][0];
          }
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
        value: 'radio'
      }
    });

    var optionsArray = this.options.split('|');
    if (!optionsArray.length) {
      variableData['type'] = 'input';
    } else {
      Object.defineProperty(variableData, 'options', {
        enumerable: false,
        writable: true,
        configurable: false,
        value: optionsArray
      });
    }

    // Set value to itself to convert to number
    variableData.value = this.value;

    currentScope.variables[ this.name ] = variableData;
  }

  toString() {
    return this.value;
  }
}
