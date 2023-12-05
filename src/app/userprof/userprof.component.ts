import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth/auth.service';
import { Iguser} from '../auth/iguser';
import { Iruser} from '../auth/iruser';
import { Puser} from '../auth/puser';
import { Suser} from '../auth/suser';
import { Luser} from '../auth/luser';

import { Cus } from '../auth/cus';


@Component({
  selector: 'app-userprof',
  templateUrl: './userprof.component.html',
  styleUrls: ['./userprof.component.css']
})


export class UserprofComponent implements OnInit {
    board: string;
    errorMessage: string;
    @Input() Towna: string ='kisho123';
    form: any = {};
    @Input() cuss: Cus[]


    @Input() iguser: Iguser
    @Input() iruser: Iruser
    @Input() puser: Puser
    @Input() suser: Suser
    @Input() luser: Luser
    constructor(private authService: AuthService) { }
    ngOnInit() {
     
  
   
      this.authService.getCuss().subscribe(data => {
        this.cuss = data;
      });
  
  
  
  
  
  
    }




    onSubmitc() {
      console.log(this.form);
     this.Towna=this.form.username; 
     this.showc = false;
  
     this.authService.getIgByUnamea(this.Towna).subscribe(data => {this.iguser = data;});
     this.authService.getIrByUnamea(this.Towna).subscribe(data => {this.iruser = data;});
     this.authService.getPlByUnamea(this.Towna).subscribe(data => {this.puser = data;});
     this.authService.getSlByUnamea(this.Towna).subscribe(data => {this.suser = data;});
     this.authService.getCusByUnamea(this.Towna).subscribe(data => {this.luser = data; });
    
     
    }
  
    @Input() showc: boolean = false;

    showcPopup() 
    {
      console.log(this); //Showb is false
      this.showc = true;
      console.log(this); //Showb is true but does not trigger the show class
    }
  
  closecPopup() 
    {
      this.showc = false;
     
    }
  
  
  
  
  }
  