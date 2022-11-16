import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

/** à stocker dans srping crud */

skillsData: any = [
  {
    'id': '1',
    'skill': 'HTML',
    'progress': '70%',
    'icon': 'fab fa-html5',
    'exp':'Plus de 3 ans d\'utilisation avec Html5 et developpement web'
  },
  {
    'id': '2',
    'skill': 'CSS3',
    'progress': '80%',
    'icon': 'fab fa-css3-alt',
    'exp':'Plus de 3 ans avec Style css3 + html, js, developpement web'
  },
  {
    'id': '3',
    'skill': 'JAVASCRIPT JQUERY',
    'progress': '80%',
    'icon': 'fab fa-js',
    'exp':'Plus de 2 ans d\'utilisation,JS et ses framwork Angular dev web'
  },
  {
    'id': '4',
    'skill': 'JAVA,J2EE',
    'progress': '75%',
    'icon': 'fab fa-java',
    'exp':'Plus de 3 ans d\'utilisation,java,J2EE, spring, swing, Rest, dev web'
  }
];


skills(): Observable<any> {
  // return this.http.get(this.baseUrl + 'skills');
  return this.skillsData;
}

}
