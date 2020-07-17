import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolio;

  constructor() { }

  ngOnInit() {
    // get data
    fetch('assets/json/portfolio.json').then(data => data.json())
      .then(projects => { this.portfolio = projects; console.log(this.portfolio) });
  }

}
