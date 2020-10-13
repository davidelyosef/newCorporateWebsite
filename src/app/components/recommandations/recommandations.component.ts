import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recommandations",
  templateUrl: "./recommandations.component.html",
  styleUrls: ["./recommandations.component.scss"],
})
export class RecommandationsComponent implements OnInit {
  public slideIndex = 1;

  constructor() {}

  ngOnInit() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      this.plusSlides(1);
    },4500)
  }

  public showSlides(n) {
    var i;
    var slides: any = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
