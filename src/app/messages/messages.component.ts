
import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Susermess } from '../auth/susermess';
import { Rusermess } from '../auth/rusermess';
import { Cus } from '../auth/cus';
import {formatDate} from '@angular/common';


import { Luser} from '../auth/luser';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

 form: any = {};
  susermess: Susermess;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { 
   
  }
  @Input() luser: Luser
  @Input() rmes: Rusermess[]
  @Input() inmess: Rusermess[]

  @Input() cuss: Cus[]
  myDate = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss a', 'en-us');
  ngOnInit() { 

    this.authService.getCuss().subscribe(data => {
      this.cuss = data;
    });


    
  this.authService.getMesByUname().subscribe(data => {
      this.rmes = data; });

  this.authService.getRMesByUname().subscribe(data => {
      this.inmess = data; });


 this.authService.getCusByUname().subscribe(data => {
      this.luser = data; });

  }

  
  
  onSubmit() {
    console.log(this.form);

    this.susermess = new Susermess(
      this.luser.username,
      this.form.touname,
      this.luser.username,
      this.form.name,
      this.myDate);

    this.authService.mess(this.susermess).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSubmita() {
    this.closePopup();
    console.log(this.form);
 


    this.susermess = new Susermess(
      this.luser.username,
      this.rtoname,
      this.luser.username,
      this.form.name,
      this.myDate);

    this.authService.mess(this.susermess).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignedUp = false;

        this.isSignUpFailed = false;


      },
      
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  @Input() show: boolean = false;

 showPopup() 
  {
    console.log(this); //Show is false
    this.show = true;
    console.log(this); //Show is true but does not trigger the show class
  }

closePopup() 
  {
    this.show = false;
    window.location.reload();
  }


  @Input() showb: boolean = false;

 showbPopup() 
  {
    console.log(this); //Showb is false
    this.showb = true;
    console.log(this); //Showb is true but does not trigger the show class
  }

closebPopup() 
  {
    this.showb = false;
    window.location.reload();
  }


  @Input() showc: boolean = false;

  deleteCus( cus: Cus): void {
    this.authService.deleteCuss(cus.id) .subscribe(data => {
      this.cuss = data;
    });
    window.location.reload();
    
  }

 showcPopup() 
  {


    console.log(this); //Showc is false
    this.showc = true;
    this.showd = false;

    console.log(this); //Showc is true but does not trigger the show class
  }

  @Input() rtoname:String = "hi"
  @Input() rmessage:String = "message"

  my(rme:Rusermess)
  {

  this.rtoname=rme.touname;
  this.rmessage=rme.name;
  }


  my1(inmes:Rusermess)
  {

  this.rtoname=inmes.fromuname;
  this.rmessage=inmes.name;
  }

closecPopup() 
  {
    this.showc = false;
    this.showd = true;


  }





  @Input() showd: boolean = false;

  showdPopup() 
   {
     console.log(this); //Showd is false
     this.showd = true;
     console.log(this); //Showd is true but does not trigger the show class
   }
 
 closedPopup() 
   {
     this.showd = false;
     window.location.reload();
   }
}
