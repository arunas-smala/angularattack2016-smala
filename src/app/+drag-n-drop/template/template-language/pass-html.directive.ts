import { 
    Directive,
    Input,
    OnInit
} from '@angular/core';

@Directive({
  selector: '[pass-html]'
})
export class PassHtml implements OnInit {

    @Input()
    p:string = '';


    @Input()
    getit:any;

  constructor() {}

  ngOnInit() {
      console.log('init', this.getit, this.p);
  }

}
