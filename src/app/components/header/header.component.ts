import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
