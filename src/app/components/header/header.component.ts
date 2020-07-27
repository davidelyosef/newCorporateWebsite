import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuDropDown', { static: false }) menuDropDown: ElementRef;

  public activateMenu(): void {
    let dropDown = this.menuDropDown.nativeElement.style.display;
    if (dropDown === 'block') 
    this.menuDropDown.nativeElement.style.display = 'none';
    else this.menuDropDown.nativeElement.style.display = 'block';
  }
  
  constructor() { }

  ngOnInit() {
  }

  public gotoElement(id) {
    const element = document.getElementById(id);
    const scrolled = window.scrollY;
    const elementPosition = element.getBoundingClientRect().top;
    window.scroll(0, scrolled + elementPosition - 50);
  }

}
