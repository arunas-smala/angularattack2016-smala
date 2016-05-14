import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[tb-codemirror]'
})
export class CodemirrorDirective implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('init');
  }

}
