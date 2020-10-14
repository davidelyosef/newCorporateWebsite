import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recommandations",
  templateUrl: "./recommandations.component.html",
  styleUrls: ["./recommandations.component.scss"],
})
export class RecommandationsComponent implements OnInit {
  public slideIndex = 1;
  public onHover = false;
  public interval = setInterval(() => this.plusSlides(1), 4500)

  constructor() {}

  ngOnInit() {
    this.showSlides(this.slideIndex);

    const divEl = document.querySelector("#my_div");

    divEl.addEventListener("mouseenter", () => {
      this.onHover = true;
      clearInterval(this.interval);
    });

    divEl.addEventListener("mouseleave", () => {
      this.onHover = false;
      this.interval = setInterval(() => this.plusSlides(1), 4500);
    });
  }

  public showSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  public plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  public currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }
}
