import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  standalone: false,
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.css'
})
export class HighlightComponent {

  @Input() highlightColor: string = 'yellow'; // Default color

  @HostListener('mouseenter') onMouseEnter() {
    (this as any).hostElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this as any).hostElement.style.backgroundColor = 'transparent';
  }

  constructor() { }

  // Get reference to the component’s host element
  get hostElement(): HTMLElement {
    return (this as any).constructor['ɵcmp'].factory().nativeElement;
  }
}



