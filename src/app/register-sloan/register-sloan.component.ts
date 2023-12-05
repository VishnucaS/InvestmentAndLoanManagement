import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SsignUpInfo } from '../auth/ssignup-info';
import { Luser} from '../auth/luser';

@Component({
  selector: 'app-register-sloan',
  templateUrl: './register-sloan.component.html',
  styleUrls: ['./register-sloan.component.css']
})
export class RegisterSloanComponent implements OnInit {

  form: any = {};
  ssignupInfo: SsignUpInfo;
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

    this.ssignupInfo = new SsignUpInfo(
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

    this.authService.ssignUp(this.ssignupInfo).subscribe(
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
