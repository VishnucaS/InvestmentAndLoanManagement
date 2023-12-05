import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PsignUpInfo } from '../auth/psignup-info';
import { Luser} from '../auth/luser';


@Component({
  selector: 'app-register-ploan',
  templateUrl: './register-ploan.component.html',
  styleUrls: ['./register-ploan.component.css']
})
export class RegisterPloanComponent implements OnInit {
  form: any = {};
  psignupInfo: PsignUpInfo;
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

    this.psignupInfo = new PsignUpInfo(
      this.luser.id,
      this.luser.username,
      this.form.name,
      this.form.minage,
      this.form.minsalary,
      this.form.about);

    this.authService.psignUp(this.psignupInfo).subscribe(
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
