// Imports
import {
    Component,
    Directive,
    Input,
    Output,
    ElementRef,
    ViewChild,
    Optional,
    OptionalMetadata,
    EventEmitter,
    Renderer
} from '@angular/core';
import {NgControl, ControlValueAccessor} from '@angular/common';

@Component({
  selector: 'tb-codemirror',
  template: `<textarea #host (change)="onValueChange($event)"></textarea>`,
})
// @Reflect.metadata('parameters', [null, [new OptionalMetadata()]])
export class CodemirrorComponent {

  @Input() config;
  @Input() configFile;
  @Input() ngModel;

  @Output() change = new EventEmitter();
  @ViewChild('host') host;

  value = '';
  instance;
  ngControl;
  renderer;

  constructor(elementRef:ElementRef, ngControl:NgControl, renderer:Renderer) {
    if (ngControl) {
      ngControl.valueAccessor = this;
      this.ngControl = ngControl;
    }
    this.renderer = renderer;
  }

  ngOnDestroy() {
      this.instance = null;
  }

  /**
   * On component view init
   */
  ngAfterViewInit() {
    // Configuration
    var config = {};

    // Fetch file
    if (this.configFile) {

      if (System && System.import) {
        System.import(this.configFile)
            .then((res) => {
              this.codemirrorInit(res.config);
            })
      }

      // Config object
    } else {
      config = this.config || {};
      this.codemirrorInit(config);
    }
  }

  /**
   * Detect textarea value change
   */
  onValueChange(event) {
    var value = this.host.nativeElement.value;
    this.change.emit(value);
    this.ngControl.viewToModelUpdate(value);
  }

  /**
   * CodeMirror init
   */
  codemirrorInit(config) {

    if (!CodeMirror) {
      console.error('Please include CodeMirror in your page');
      return;
    }

    // CodeMirror replace textarea
    this.instance = CodeMirror.fromTextArea(this.host.nativeElement, config);

    // Set initial value
    if (this.value) {
      this.instance.setValue(this.value);
    }

    // CodeMirror change event
    var changeTimeout;
    this.instance.on('change', () => {
      if (changeTimeout) {
        clearTimeout(changeTimeout);
      }

      this.renderer.setElementProperty(this.host.nativeElement, 'value', this.instance.getValue());
      changeTimeout = setTimeout(() => {
        this.renderer.invokeElementMethod(this.host.nativeElement, 'dispatchEvent', [new Event('change')])
      }, 100);
    });
  }

  /**
   * Implements ControlValueAccessor
   */
  writeValue(value) {
    this.value = value;
    if (this.instance && value)
      this.instance.setValue(value);
  }

  onChange(_) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
