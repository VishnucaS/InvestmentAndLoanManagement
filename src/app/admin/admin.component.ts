import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth/auth.service';
import { User} from '../auth/user';
import { Luser} from '../auth/luser';
import { Cus} from '../auth/cus';

import { Puser} from '../auth/puser';
import { Suser} from '../auth/suser';
import { Iruser} from '../auth/iruser';
import { Iguser} from '../auth/iguser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  @Input() luser: Luser
  users: User[];
  cuss: Cus[];
  cus1s: Cus[];

  pusers: Puser[];
  susers: Suser[];
  igusers: Iguser[];
  irusers: Iruser[];

  constructor(private authService: AuthService) { }

  ngOnInit() {

 
    this.authService.getUsers().subscribe(data => {
      this.users = data;
 
    });

    this.authService.getPusers().subscribe(data => {
      this.pusers = data; });

      this.authService.getSusers().subscribe(data => {
        this.susers = data; });

        this.authService.getIgusers().subscribe(data => {
          this.igusers = data; });

          this.authService.getIrusers().subscribe(data => {
            this.irusers = data; });
    
    this.authService.getCuss().subscribe(data => {
      this.cuss = data;
    });



    this.authService.getCusByUname().subscribe(data => {
      this.luser = data; });
  }

 delcus()
 {
  this.authService.deleteAllcus() .subscribe(data => {
    this.cuss = data;
  });
  window.location.reload();

 }


  deleteCus( cus: Cus): void {
    this.authService.deleteCuss(cus.id) .subscribe(data => {
      this.cuss = data;
    });
    window.location.reload();
    
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


  @Input() showe: boolean = false;

  showePopup() 
  {
    console.log(this); //Showe is false
    this.showe = true;
    console.log(this); //Showe is true but does not trigger the show class
  }

closeePopup() 
  {
    this.showe = false;
    window.location.reload();
  }

}
