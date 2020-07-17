import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', 'animationsfooter.component.scss']
})
export class FooterComponent {
  public yr: number = new Date().getFullYear();

  constructor() { }

  public returnToIntro() {
    window.scrollTo(0, 0);
  }

}
