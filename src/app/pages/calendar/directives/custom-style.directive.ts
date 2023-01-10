import { Directive, inject, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true,

})
export class CustomStyleDirective implements OnInit {
  @Input('appCustomStyle') appCustomStyle: any
  renderer = inject(Renderer2)
  elementRef = inject(ElementRef)
  currentDay = new Date()
  ngOnInit(): void {
    const [month, day, year] = this.currentDay.toLocaleDateString().split('/')
    const stringCurrentDate = [year, month, day].join('-')
    if (stringCurrentDate === this.appCustomStyle) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background' , 'rgba(0, 0, 0, 0.3)')
      this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'yellow')
    }
  }
}
