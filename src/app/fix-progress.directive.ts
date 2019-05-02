import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFixProgress]'
})
export class FixProgressDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elRef.nativeElement.querySelector('.ant-progress-circle-path').setAttribute('class', 'ant-progress-circle-path-fixed');
  }

}
