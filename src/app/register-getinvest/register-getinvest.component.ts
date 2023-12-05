import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IrsignUpInfo } from '../auth/irsignup-info';
import { Luser} from '../auth/luser';


@Component({
  selector: 'app-register-getinvest',
  templateUrl: './register-getinvest.component.html',
  styleUrls: ['./register-getinvest.component.css']
})
export class RegisterGetinvestComponent implements OnInit {

  form: any = {};
  irsignupInfo: IrsignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { 
   
  }
  @Input() luser: Luser
  ngOnInit() { 

  

 this.authService.getCusByUname().subscribe(data => {
      this.luser = data; });

  }

  
  
  onSubmit() {
    console.log(this.form);

    this.irsignupInfo = new IrsignUpInfo(
      this.luser.id,
      this.luser.username,
      this.form.name,
      this.form.yearsofoccupation,
      this.form.salary,
      this.form.gname,
      this.form.gnic,
      this.form.gphonenumber,
      this.form.gjob,
      this.form.grelationship);

    this.authService.irsignUp(this.irsignupInfo).subscribe(
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
}
