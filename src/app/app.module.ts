import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomepageComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
