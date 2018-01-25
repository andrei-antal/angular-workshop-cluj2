import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[imageFallback]',
})
export class ImageFallbackDirective {
  @Input() imageFallback = 'assets/noImage1.jpg';

  @HostListener('error')
  setImage() {
    this.el.nativeElement.src = this.imageFallback;
  }

  constructor(private el: ElementRef) {}
}
