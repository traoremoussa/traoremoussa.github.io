import { ContactModel } from './model/contact-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,mapTo,delay ,catchError,map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  myApi:string="https://formspree.io/f/mbjbzwej";

  constructor(private http:HttpClient) { }

  sendMessage(input: ContactModel):  Observable<boolean> {
    return this.http.post(this.myApi, input, { responseType: 'text' })
      .pipe(

        mapTo(true),// return true
        catchError(() => of(false).pipe( //false
        delay(1000)
      ))
      );
  }
}
