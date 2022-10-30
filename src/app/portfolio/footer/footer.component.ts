import { Component, OnInit } from '@angular/core';
import { reseaux } from 'src/app/api/reseaux';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  rsx:any=reseaux;
  constructor() { }

  ngOnInit(): void {

  }

}
