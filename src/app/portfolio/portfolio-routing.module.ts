import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio.component";


const routes: Routes = [

  { path: '', component: PortfolioComponent },
 // { path: 'experience', component: ExperienceComponent },
 // { path: '', redirectTo: '/portofolio', pathMatch: 'full' }, // default route, une fois que la page est chargé on redirect to dashbord
]


@NgModule({
  // on va indiquer comme son enfant de la route principale
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioRoutingModule {}
