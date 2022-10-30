import { ContactModel } from './../shared/contact/model/contact-model';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../shared/contact/contact.service';
import { tap } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  mainForm!: FormGroup;

  name!: string;
  email!: string;
  sujet!: String;
  message!: string;
  contactModel!: ContactModel;

  constructor(
    private formBuilder: FormBuilder,

    private toastr: ToastrService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.mainForm   = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      sujet: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  public envoyerMessage(): void {
    this.contactModel =this.mainForm .value;
    this.contactService
      .sendMessage(this.contactModel)
      .pipe(
        tap((saved) => {
          //retour du save
          ///spinner masque
          // this.loading = false;

          //si
          if (saved) {
            this.showSuccess();
            this.resetForm();
          } else {
            this.showError();
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
    this.toastr.error('error denvoie!', 'Contacter Traore');
  }

  private resetForm() {
    //remet tout à zero
    this.mainForm.reset();
  }
  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return "Merci d'entrer une adresse mail valide";
    } else if (ctrl.hasError('minlength')) {
      return 'le message doit avoir au moins 20 lettre';

    } else {
      return 'Ce champ contient une erreur';
    }
  }

   geterrors(){


    if (this.mainForm.get('name')?.touched &&this.mainForm.get('name')?.errors) {
      return 'Le champ Name est requis';
    } else if (this.mainForm.get('email')?.touched&&this.mainForm.get('email')?.errors) {
      return "Merci d'entrer une adresse mail valide";
    } else if (this.mainForm.get('message')?.touched &&this.mainForm.get('message')?.errors) {
      return 'le message doit avoir au moins 20 lettre';

    } else if (this.mainForm.get('sujet')?.touched &&this.mainForm.get('sujet')?.errors){
      return 'Le champ Sujet est requis';
    }
  return " ";
}
}
