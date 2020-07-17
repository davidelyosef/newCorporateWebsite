import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
