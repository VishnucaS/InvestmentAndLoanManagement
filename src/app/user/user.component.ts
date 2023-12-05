import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth/auth.service';
import { Iguser} from '../auth/iguser';
import { Iruser} from '../auth/iruser';
import { Puser} from '../auth/puser';
import { Suser} from '../auth/suser';
import { Luser} from '../auth/luser';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;

  @Input() iguser: Iguser
  @Input() iruser: Iruser
  @Input() puser: Puser
  @Input() suser: Suser
  @Input() luser: Luser
  constructor(private authService: AuthService) { }
  ngOnInit() {
   

 this.authService.getIgByUname().subscribe(data => {this.iguser = data;});
 this.authService.getIrByUname().subscribe(data => {this.iruser = data;});
 this.authService.getPlByUname().subscribe(data => {this.puser = data;});
 this.authService.getSlByUname().subscribe(data => {this.suser = data;});
 this.authService.getCusByUname().subscribe(data => {this.luser = data; });







  }
}
