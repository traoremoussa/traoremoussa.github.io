import { Component, OnInit } from '@angular/core';
import { experiencesFr } from 'src/app/api/experiencesFr';
import * as awesom from '@fortawesome/free-solid-svg-icons';
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
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }

}
