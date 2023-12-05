import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IgsignUpInfo } from '../auth/igsignup-info';
import { Luser} from '../auth/luser';

@Component({
  selector: 'app-register-giveinvest',
  templateUrl: './register-giveinvest.component.html',
  styleUrls: ['./register-giveinvest.component.css']
})
export class RegisterGiveinvestComponent implements OnInit {

  form: any = {};
  igsignupInfo: IgsignUpInfo;
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

    this.igsignupInfo = new IgsignUpInfo(
      this.luser.id,
      this.luser.username,
      this.form.name,
      this.form.areas,
      this.form.minrate,
      this.form.about);

    this.authService.igsignUp(this.igsignupInfo).subscribe(
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
