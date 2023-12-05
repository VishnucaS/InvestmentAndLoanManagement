import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Suser} from '../auth/suser';
import { Sreq} from '../auth/Reqs/sreq';
import { Preq} from '../auth/Reqs/preq';
import { Preqstatus} from '../auth/ReqStatuss/preqstatus';


import { UserComponent } from '../user/user.component';
import { delay } from 'q';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-sloan',
  templateUrl: './sloan.component.html',
  styleUrls: ['./sloan.component.css']
})
export class SloanComponent implements OnInit {

  form: any = {};
  sreq: Sreq;
  isSignedUp = false;
  isSignUpFailed = false;

  isSignedUpa = false;
  isSignUpFaileda = false;



  isSignedUpb = false;
  isSignUpFailedb = false;


  errorMessage = '';
  preqstatus: Preqstatus;
  preqstatusaccept: Preqstatus;

  myDate = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss a', 'en-us');




 
  private roles: string[];
  private authority: string;
  @Input() suser: Suser
  @Input() surequests: Sreq[]
  @Input() srequests: Sreq[]

  @Input() prequests: Preq[]

  @Input()  prequestbyrunames: Preqstatus[]

 


isLoggedIn = false;

  

  constructor(private authService: AuthService) { }

  ngOnInit() {
  


    this.authService. getPreqAll().subscribe(data => {
      this.prequests = data;

      
    });
    
    
    this.authService.getPreqstatusByRuname().subscribe(data => {
      this.prequestbyrunames = data;

      
    });
   


    this.authService.getSlByUname().subscribe(data => {
      this.suser = data;
      if (this.suser.id) 
      { this.isLoggedIn = true;}
    });


    this.authService.getSreqByUname().subscribe(data => {
      this.surequests = data;});

      this.authService.getSreqAll().subscribe(data => {
        this.srequests = data;});

        
  
  
  
      }

      deleteSreqbyId( surequest: Sreq): void {
        this.authService.deleteSreqbyid(surequest.id) .subscribe(data => {
          this.surequests = data;
        });
      
        window.location.reload();
        
      }

  onSubmit() {
    console.log(this.form);

    this.sreq = new Sreq(
      this.suser.uname,
      this.form.amount,
      this.form.duration,
      this.form.rate,
      this.form.negotiation,
      this.myDate);

    this.authService.sreqsend(this.sreq).subscribe(
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


 

   
   showcPopup() 
   {
     console.log(this); //Showc is false
     this.showc = true;
     console.log(this); //Showc is true but does not trigger the show class
   }
 
 closecPopup() 
   {
     this.showc = false;
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
   }

   @Input() amount:Number=8
   @Input() rate:Number
   @Input() duration:Number
   @Input() id:Number
   @Input() condition1:boolean=false
   @Input() uname:String
   @Input() amts:number[]
 
   while(duration) { 
this.amts[duration-1]=duration

    duration--; 
 }
   CalLoan(req:Preq)
   {
    this.authService. getPreqstatusByRunameByReqidByStatus(this.id, this.suser.uname,"Accept").subscribe(data => {
      this.preqstatusaccept = data;
      if (this.preqstatusaccept.id) 
      { this.condition1 = true;}
    });

    console.log(this); //Showf is false
    this.showc = false;
    this.showf = true;
    console.log(this);
  
  this.id=req.id;
   this.amount=req.amount;
   this.rate=req.rate;
   this.duration=req.duration;
 this.uname=req.uname





   }

   onSubmitAccept() {
    console.log(this.form);

    this.preqstatus = new Preqstatus(
      this.id,
      this.suser.uname,
      this.uname,
      "Accept",
      "No response",
      "No Lawyer",
      "No Comments",
     );

    this.authService.preqstatussend(this.preqstatus).subscribe(
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
delay(1000);
this.showf = true;
  }


  onSubmitstatusr() {
    console.log(this.form);



    this.authService.updatepreqstatussend(1,{reqid:5,runame:"thanu123",suname:"thusha123",receiverstatus:"reject", senderstatus:"reject",lawyer:"rkisho11",comments:"reject coment"}).subscribe(
      data => {
        console.log(data);
        this.isSignedUpa = true;
        this.isSignUpFaileda = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFaileda = true;
      }
    );
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



