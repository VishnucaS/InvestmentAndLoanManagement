import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Lawyer} from '../auth/lawyer';
import { Lawyerreg} from '../auth/lawyerreg';
import { Luser} from '../auth/luser';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent implements OnInit {

  constructor(private authService: AuthService,private tokenStorage: TokenStorageService,private token: TokenStorageService) { }
  @Input() lawyers: Lawyer[]
  @Input() lawyeras: Lawyer[]

  private roles: string[];
  private authority: string;


  form: any = {};
 lawyerreg: Lawyerreg;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  @Input() luser: Luser
  @Input() Towna: string ='Negombo';


  ngOnInit() {

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

    this.authService.getLawyer().subscribe(data => {
      this.lawyers = data;     });

     

      this.authService.getCusByUname().subscribe(data => {
        this.luser = data; });

  }



  onSubmit() {
    console.log(this.form);

    this.lawyerreg = new Lawyerreg(
      this.form.name,
      this.form.contactnum,
      this.form.email, 
      this.form.address,
      this.form.town);

    this.authService.RegLawyer(this.lawyerreg).subscribe(
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


  
  onSubmitc() {
    console.log(this.form);
   this.Towna=this.form.town; 
   this.showd = true;
   this.showc = false;

   this.authService.getLawyerByTown(this.Towna).subscribe(data => {
    this.lawyeras = data;     });
  }



  @Input() showa: boolean = false;
  @Input() showb: boolean = false;
  @Input() showc: boolean = false;
  @Input() showd: boolean = false;




  showaPopup() 
   {
     console.log(this); //Showa is false
     this.showa = true;
     console.log(this); //Showa is true but does not trigger the show class
   }
 
 closeaPopup() 
   {
     this.showa = false;
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
     console.log(this); //Showb is false
     this.showd = true;
     console.log(this); //Showb is true but does not trigger the show class
   }
 
 closedPopup() 
   {
     this.showd = false;
     this.showc = true;

   //  window.location.reload();
   }
  }