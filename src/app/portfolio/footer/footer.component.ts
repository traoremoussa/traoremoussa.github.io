import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedin!:string;
  constructor() { }

  ngOnInit(): void {
    this.linkedin="https://www.linkedin.com/in/moussa-m-mah-traore-95a873115/"
  }

}
