import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[linea]',
})
export class LineaDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', []) onWindowScroll() {
    const scroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const width = Math.min((scroll / height) * 200, 100);
    this.el.nativeElement.style.width = width + '%';
  }
}
