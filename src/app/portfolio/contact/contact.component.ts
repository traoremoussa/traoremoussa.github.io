import { ContactModel } from './../shared/contact/model/contact-model';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../shared/contact/contact.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  sujet!: String;
  message!: string;
  contactModel!:ContactModel;
  constructor(private toastr: ToastrService,private contactService:ContactService) {}

  ngOnInit(): void {}

  public envoyerMessage(): void {
this.contactModel={
  name:this.name,
email:this.email,
sujet:this.sujet,
message:this.message

}
this.toastr.warning("ok"+this.contactModel.email);

    this.contactService
    .sendMessage(this.contactModel)
    .pipe(
      tap((saved) => {
        //retour du save
        ///spinner masque
       // this.loading = false;
       this.showSuccess();
        //si
        if (saved) {
        //  this.resetForm();
        } else {
         this. showError();
          console.error("Echec de l'enregistrement");
        }
      })
    )
    .subscribe();




    console.log(this.name);
  }
  showSuccess() {
    this.toastr.success('Contacter Traore', 'Came Soon!');
  }

  showError() {
    this.toastr.error('error denvoie!','Contacter Traore');
  }
}
