import { Component, OnInit,Input } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  errorMessagea = '';
  board= '';

  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private userService: UserService,) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }


    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessagea = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );


 


  }

  reloadPage() {
    window.location.reload();
  }


  @Input() showw: boolean = false;

  showwPopup() 
  {
    console.log(this); //Showm is false
    this.showw = true;
    console.log(this); //Showm is true but does not trigger the show class
  }
  
  
}
