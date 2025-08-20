import { Directive, Host, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'backgroundColor');
  }

}
