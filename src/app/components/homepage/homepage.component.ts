import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', 'animationshome.component.scss']
})
export class HomepageComponent implements OnInit {
  public portfolio: any[];
  public contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })
  public messagePopup: string = 'none';
  public messageForPopup: string = 'Thank you, I will contact you soon';
  public bgForPopup: string = '#fff';
  public colorForPopup: string = '#000';
  public about: string = 'block';
  public about2: string = 'block';

  constructor() { }

  ngOnInit() {
    // aboutMe events
    const coder = document.querySelector('#coder');
    const coder2 = document.querySelector('#coder2');
    // backgrounds
    const code: any = document.querySelector('#code');
    const designer: any = document.querySelector('#designerBg');
    // the first about me section
    coder.addEventListener('mouseover', () => {
      this.about = 'aboutme';
      this.about2 = 'fadeOutRight';
      // activate code background
      code.style.visibility = 'visible';
    });
    coder.addEventListener('mouseleave', () => {
      this.about2 = 'fadeInRight';
      // hide code background
      code.style.visibility = 'hidden';
    });
    // the second about me section
    coder2.addEventListener('mouseover', () => {
      this.about2 = 'aboutme';
      this.about = 'fadeOutLeft';
      // activate designer background
      designer.style.visibility = 'visible';
    });
    coder2.addEventListener('mouseleave', () => {
      this.about = 'fadeInLeft';
      // hide designer background
      designer.style.visibility = 'hidden';
    });

    // get data
    fetch('assets/json/portfolio.json').then(data => data.json())
      .then(projects => this.portfolio = projects);

    // header links
    let btnPortfolio = document.getElementsByClassName('btn-warning')[0];
    let btnSkills = document.getElementsByClassName('btn-warning')[1];
    let btnContact = document.getElementsByClassName('btn-warning')[2];
    // elements
    const bounce = document.getElementById("languages");
    const zoomIn = document.getElementById("zoomIn");
    const fadeIn = document.getElementById("fadeIn");
    const skills = document.querySelector("#skills");
    const portfolio = document.querySelector("#portfolio");
    const footer = document.querySelector("#footer");
    const contact = document.querySelector('#contact');
    // screen
    const screenPosition = window.innerHeight;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    // scroll events
    document.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      // positions y:top
      const portfolioYPos = portfolio.getBoundingClientRect().top;
      const footerYPos = footer.getBoundingClientRect().top;
      const skillsYPosition = skills.getBoundingClientRect().top;
      const contactYPos = contact.getBoundingClientRect().top;

      // animation in skills and footer
      if (skillsYPosition < screenPosition - 20) {
        skills.classList.add('bounceInRight', 'animated');
        bounce.classList.add('bounce', 'animated');
        zoomIn.classList.add('zoomIn', 'animated');
      }
      if (scrolled >= scrollable) {
        fadeIn.classList.add('fadeInDown', 'animated');
      }

      // exact position of the elements
      const skillsPos = scrolled + skillsYPosition - 53;
      const portfolioPos = scrolled + portfolioYPos - 53;
      const footerPos = scrolled + footerYPos - 53;
      const contactPos = scrolled + contactYPos - 53;
      // turn on header switchers
      scrolled >= portfolioPos && scrolled < skillsPos ? btnPortfolio.classList.add('focus') : btnPortfolio.classList.remove('focus');
      scrolled >= skillsPos && scrolled < contactPos ? btnSkills.classList.add('focus') : btnSkills.classList.remove('focus');
      scrolled >= contactPos ? btnContact.classList.add('focus') : btnContact.classList.remove('focus');
    });
  }

  public onSubmit() {
    let form = this.contactForm.value;
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (form.fullName !== "" && form.email !== "" && form.subject !== "" && form.message !== "") {
      if (emailRegex.test(form.email)) {
        form.email = form.email.toLowerCase();
        // here i send the mail
        this.confirmSub('Thank you, I will contact you soon', '#fff', '#000', true);
      } else {
        this.confirmSub('Ilegal email address, please type again.', '#ff4b4bf2', '#fff', false);
      }
    } else {
      this.confirmSub('Please fill all the fields.', '#ff4b4bf2', '#fff', false);
    }
  }

  private confirmSub(string, bg, color, condition): void {
    this.messageForPopup = string;
    this.bgForPopup = bg;
    this.colorForPopup = color;
    if (condition) this.contactForm.setValue({ fullName: '', email: '', subject: '', message: '' });
    this.messagePopup = 'block';
    setTimeout(() =>
      this.messagePopup = 'none', 3000);
  }

  public close(): void {
    this.messagePopup = 'none'
  }
}
