import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Puser} from '../auth/puser';
import { Preq} from '../auth/Reqs/preq';
import { Sreq} from '../auth/Reqs/sreq';
import { Sreqstatus} from '../auth/ReqStatuss/sreqstatus';
import {formatDate} from '@angular/common';

import { TokenStorageService } from '../auth/token-storage.service';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-ploan',
  templateUrl: './ploan.component.html',
  styleUrls: ['./ploan.component.css']
})
export class PloanComponent implements OnInit {
  form: any = {};
  preq: Preq;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  sreqstatus: Sreqstatus;
  sreqstatusaccept: Sreqstatus;


  isSignedUpb = false;
  isSignUpFailedb = false;
  
  private roles: string[];
  private authority: string;

  myDate = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss a', 'en-us');
  @Input() puser: Puser
  @Input() prequests: Preq[]
  @Input() srequests: Sreq[]

  @Input() purequests: Preq[]

  @Input() interest:Number=3
  @Input()  srequestbyrunames: Sreqstatus[]


isLoggedIn = false;

 
 
  constructor(private tokenStorage: TokenStorageService,private token: TokenStorageService,private authService: AuthService) { }
  

  
  
  ngOnInit() {

  
    this.authService.getPlByUname().subscribe(data => {
      this.puser = data;
      if (this.puser.id) 
      { this.isLoggedIn = true;}
    });


    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }


    this.authService.getPreqByUname().subscribe(data => {
      this.purequests = data;

      
    });


    this.authService.getPreqAll().subscribe(data => {
      this.prequests = data;});

      this.authService.getSreqAll().subscribe(data => {
        this.srequests = data;});



          
    this.authService.getSreqstatusByRuname().subscribe(data => {
      this.srequestbyrunames = data;

      
    });


    }

  
   
    deletePreqbyId( purequest: Preq): void {
      this.authService.deletePreqbyid(purequest.id) .subscribe(data => {
        this.purequests = data;
      });
    
      window.location.reload();}


  onSubmit() {
    console.log(this.form);

    this.preq = new Preq(
      this.puser.uname,
      this.form.amount,
      this.form.duration,
      this.form.rate,
      this.form.negotiation,
      this.myDate);

    this.authService.preqsend(this.preq).subscribe(
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



  @Input() show: boolean = false;
  @Input() showb: boolean = false;
  @Input() showc: boolean = false;
  @Input() showd: boolean = false;
  @Input() showf: boolean = false;


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
 
   showcPopup() 
   {
     console.log(this); //Showb is false
     this.showc = true;
     console.log(this); //Showb is true but does not trigger the show class
   }
 
 closecPopup() 
   {
     this.showc = false;
     window.location.reload();
   }


   
   
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

   showfPopup() 
   {
     console.log(this); //Showf is false
     this.showc = false;
     this.showf = true;
     console.log(this); //Showf is true but does not trigger the show class
   }
 
 closefPopup() 
   {
     this.showf = false;
     this.showc = true;
     this.condition1 = false;

   }

   @Input() amount:Number=8
   @Input() rate:Number
   @Input() duration:Number
   @Input() id:Number
   @Input() uname:String
   @Input() amts:number[]
   @Input() condition1:boolean=false


   CalLoan(req:Sreq)
   {
    this.condition1=false;


    console.log(this); //Showf is false
    this.showc = false;
    this.showf = true;
    console.log(this);
    this.authService. getSreqstatusByRunameByReqidByStatus(this.id, this.puser.uname,"Accept").subscribe(data => {
      this.sreqstatusaccept = data;
      if (this.sreqstatusaccept.id) 
      { this.condition1 = true;}
    });

  this.id=req.id;
   this.amount=req.amount;
   this.rate=req.rate;
   this.duration=req.duration;
 this.uname=req.uname





   }

   onSubmitAccept() {
    console.log(this.form);

    this.sreqstatus = new Sreqstatus(
      this.id,
      this.puser.uname,
      this.uname,
      "Accept",
      "No response",
      "No Lawyer",
      "No Comments",
     );

    this.authService.sreqstatussend(this.sreqstatus).subscribe(
      data => {
        console.log(data);
        this.isSignedUpb = true;
        this.isSignUpFailedb = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailedb = true;
      }
    );

this.showf = false;
this.showf = true;
  
}




@Input() showg: boolean = false;

showgPopup() 
{
  console.log(this); //Showg is false
  this.showg = true;
  console.log(this); //Showg is true but does not trigger the show class
}

closegPopup() 
{
  this.showg = false;
}


@Input() showh: boolean = false;

showhPopup() 
{
  console.log(this); //Showh is false
  this.showh = true;
  console.log(this); //Showh is true but does not trigger the show class
}

closehPopup() 
{
  this.showh = false;
}


@Input() showm: boolean = false;

showmPopup() 
{
  console.log(this); //Showm is false
  this.showm = true;
  console.log(this); //Showm is true but does not trigger the show class
}

closemPopup() 
{
  this.showm = false;
  window.location.reload();

}


}
