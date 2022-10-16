import { ExperienceComponent } from './portfolio/experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'portfolio',loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)},
  //{ path: '', redirectTo: '/portofolio', pathMatch: 'full' }, // default route, une fois que la page est chargé on redirect to dashbord

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
