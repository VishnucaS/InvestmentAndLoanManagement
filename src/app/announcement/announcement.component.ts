import { Component, OnInit ,Input} from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

import { Luser} from '../auth/luser';
import { Announce } from '../auth/announce';
import { AnnounceReg } from '../auth/announceReg';
import { AuthService } from '../auth/auth.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  private roles: string[];
  private authority: string;

  myDate = formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss a', 'en-us');
  
    form: any = {};
    announceReg: AnnounceReg;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    constructor(private tokenStorage: TokenStorageService,private authService: AuthService) { 
     
    }
    @Input() luser: Luser
    @Input() announces: Announce[]

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
 
   this.authService.getCusByUname().subscribe(data => {
        this.luser = data; });
  

        this.authService.getAnnounces().subscribe(data => {
          this.announces = data; });
    }
  
    
    
    onSubmit() {
      console.log(this.form);
  
      this.announceReg = new AnnounceReg(
        this.luser.username,
        this.form.message,
        this.myDate );
  
      this.authService.sendAnnounce(this.announceReg).subscribe(
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




   @Input() showd: boolean = false;


   showdPopup() 
    {
      console.log(this); //Show is false
      this.showd = true;
      console.log(this); //Show is true but does not trigger the show class
    }
  
  closedPopup() 
    {
      this.showd = false;
      window.location.reload();
    }
  }
  