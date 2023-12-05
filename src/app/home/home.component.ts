import { Component, OnInit,Input } from '@angular/core';
import { Announce } from '../auth/announce';
import { AnnounceReg } from '../auth/announceReg';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Luser} from '../auth/luser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  @Input() announces: Announce[]
  @Input() luser: Luser

  constructor(private token: TokenStorageService,private authService: AuthService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      name: this.token.getName(),

      id: this.token.getId(),

      authorities: this.token.getAuthorities()
    };


    this.authService.getAnnounces().subscribe(data => {
      this.announces = data; });


      this.authService.getCusByUname().subscribe(data => {
        this.luser = data; });

  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
