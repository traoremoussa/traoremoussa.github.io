import { Component, OnInit } from '@angular/core';
import { experiencesFr } from 'src/app/api/experiencesFr';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences:any=experiencesFr;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

  constructor() {

  }

  ngOnInit(): void {
    this.experiences=experiencesFr;

  }

  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }

}
