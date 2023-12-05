import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Iguser} from '../auth/iguser';
import { Igreq} from '../auth/Reqs/Igreq';
import { Irreq} from '../auth/Reqs/Irreq';
import { Irreqstatus} from '../auth/ReqStatuss/irreqstatus';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-investing',
  templateUrl: './investing.component.html',
  styleUrls: ['./investing.component.css']
})



export class InvestingComponent implements OnInit {
  @Input() iguser: Iguser
  @Input() igrequests: Igreq[]
  @Input() igurequests: Igreq[]

  @Input() irrequests: Irreq[]
  form: any = {};
  igreq: Igreq;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';


  
  isSignedUpa = false;
  isSignUpFaileda = false;



  isSignedUpb = false;
  isSignUpFailedb = false;

  irreqstatus: Irreqstatus;
  irreqstatusaccept: Irreqstatus;
  @Input()  irrequestbyrunames: Irreqstatus[];

  myDate = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss a', 'en-us');

  constructor(private authService: AuthService) { }

  isLoggedIn = false;
  ngOnInit() {

  
    this.authService.getIgByUname().subscribe(data => {
      this.iguser = data;
      if (this.iguser.id) 
      { this.isLoggedIn = true;}
    });

  


    this.authService.getIrreqAll().subscribe(data => {
      this.irrequests = data;    });

      this.authService.getIgreqAll().subscribe(data => {
        this.igrequests = data;    });
   
      this.authService.getIgreqByUname().subscribe(data => {
        this.igurequests = data;});
 
        this.authService.getIrreqstatusByRuname().subscribe(data => {
          this.irrequestbyrunames = data; });

          
 
    } 



  @Input() sum: Number

  deleteIgreqbyId( igurequest: Igreq): void {
    this.authService.deleteIgreqbyid(igurequest.id) .subscribe(data => {
      this.igurequests = data;
    });
  
    window.location.reload();
    
  }

  onSubmit() {
    console.log(this.form);

    this.igreq = new Igreq(
      this.iguser.uname,
      this.form.amount,
      this.form.duration,
      this.form.rate,
      this.form.negotiation,
      this.myDate
);

    this.authService.igreqsend(this.igreq).subscribe(
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
   CalLoan(req:Irreq)
   {
    this.authService. getIrreqstatusByRunameByReqidByStatus(this.id, this.iguser.uname,"Accept").subscribe(data => {
      this.irreqstatusaccept = data;
      if (this.irreqstatusaccept.id) 
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

    this.irreqstatus = new Irreqstatus(
      this.id,
      this.iguser.uname,
      this.uname,
      "Accept",
      "No response",
      "No Lawyer",
      "No Comments",
     );

    this.authService.irreqstatussend(this.irreqstatus).subscribe(
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
  


