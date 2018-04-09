import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[blackWhiteImage]'
})
export class BlackWhiteImageDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.zoom('grayscale(100%)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.zoom('grayscale(0%)');
    }

    private zoom(index: string) {
        this.el.nativeElement.style.filter = index;
    }
}