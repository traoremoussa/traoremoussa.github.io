
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';


// à connaitre
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesComponent } from './services/services.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { IntroComponent } from './intro/intro.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './shared/contact/contact.service';

@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    FormationComponent,
    CompetencesComponent,
    ServicesComponent,
    IntroComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PortfolioRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],

  providers:[
    /*
    un service gerer localement dans le module
    */
    ContactService
  ]
})
export class PortfolioModule { }
