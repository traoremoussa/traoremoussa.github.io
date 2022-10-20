import { Component, OnInit } from '@angular/core';
import { experiencesFr } from 'src/app/api/experiencesFr';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  experiences:any=experiencesFr;
  constructor() { }

  ngOnInit(): void {
    this.experiences=experiencesFr;
  }

}
