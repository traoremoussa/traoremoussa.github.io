import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  name!:string;
  email!:string;
  sujet!:String;
  message!:string;
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  public envoyerMessage():void{
   this. showSuccess() ;
console.log(this.name);
  }
  showSuccess() {
    this.toastr.success('Contacter Traore', 'Came Soon!');
  }
}
