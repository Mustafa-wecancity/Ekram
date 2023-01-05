import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveAnimation]'
})
export class DirectiveAnimationDirective {

  @HostBinding('autocomplete') public autocomplete;

  constructor() {
    this.autocomplete = 'off';
  }

  @HostListener('mo', ['$event']) public disableKeys(e:any) {
    const stringAllow = /^[-\sa-zA-Z,0-9]+$/;
    let inputChar = e.key;
    if (!stringAllow.test(inputChar)) {
      e.preventDefault();
    }
  }
}
