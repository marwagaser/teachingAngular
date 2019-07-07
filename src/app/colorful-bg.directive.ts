import { Directive, ElementRef } from "@angular/core";
@Directive({
 selector: "[appColorfulBG]"
})
export class ColorfulBGDirective {
 constructor(private e1: ElementRef) {
   e1.nativeElement.style.background = "navy";
 }
}
