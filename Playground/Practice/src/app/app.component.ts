import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'Tour of Heroes';

  items = ['Angular', 'React', 'Vue'];

  isActive = true;

  show = true;

  @ViewChild('inp') inpElement!: ElementRef;

  ngOnInit(): void {
    console.log(this.inpElement?.nativeElement.value); 
  }

  ngAfterViewInit(): void {
    console.log(this.inpElement.nativeElement.value); 
  }

  btnClicked(event: any) {
    this.inpElement.nativeElement.value = "Updated to Jalgara";
  }

}
