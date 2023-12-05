import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

import { PsignUpInfo } from './psignup-info';
import { SsignUpInfo } from './ssignup-info';
import { IrsignUpInfo } from './irsignup-info';
import { IgsignUpInfo } from './igsignup-info';
import { AnnounceReg} from './announceReg';
import {Lawyerreg } from './lawyerreg';


import { User } from './user';
import { Luser } from './luser';
import { Susermess } from './susermess';
import { Rusermess } from './rusermess';
import { Announce } from './announce';
import {Lawyer} from './lawyer';



import { Preq } from './Reqs/preq';
import { Sreq } from './Reqs/sreq';
import { Irreq } from './Reqs/irreq';
import { Igreq } from './Reqs/igreq';


import { Preqstatus } from './ReqStatuss/preqstatus';
import { Sreqstatus } from './ReqStatuss/sreqstatus';
import { Irreqstatus } from './ReqStatuss/irreqstatus';
import { Igreqstatus } from './ReqStatuss/igreqstatus';


import { Iguser } from './iguser';
import { Iruser } from './iruser';
import { Puser } from './puser';
import { Suser } from './suser';

import { Cus } from './cus';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private psignupUrl = 'http://localhost:8080/api/auth/psignup';
  private ssignupUrl = 'http://localhost:8080/api/auth/ssignup';
  private irsignupUrl = 'http://localhost:8080/api/auth/irsignup';
  private messUrl = 'http://localhost:8080/api/auth/usermess';
  private announceregUrl = 'http://localhost:8080/api/auth/announce';


  private preqUrl = 'http://localhost:8080/api/auth/userareq';
  private sreqUrl = 'http://localhost:8080/api/auth/userbreq';
  private igreqUrl = 'http://localhost:8080/api/auth/usercreq';
  private irreqUrl = 'http://localhost:8080/api/auth/userdreq';
  private reglawUrl = 'http://localhost:8080/api/auth/lawyer';


  private preqstatusUrl = 'http://localhost:8080/api/auth/userareqstatus';
  private sreqstatusUrl = 'http://localhost:8080/api/auth/userbreqstatus';
  private igreqstatusUrl = 'http://localhost:8080/api/auth/usercreqstatus';
  private irreqstatusUrl = 'http://localhost:8080/api/auth/userdreqstatus';


  private sreqdeletebyidUrl = 'http://localhost:8080/api/auth/userbreq/delete';
  private preqdeletebyidUrl = 'http://localhost:8080/api/auth/userareq/delete';
  private irreqdeletebyidUrl = 'http://localhost:8080/api/auth/userdreq/delete';
  private igreqdeletebyidUrl = 'http://localhost:8080/api/auth/usercreq/delete';



  private igsignupUrl = 'http://localhost:8080/api/auth/igsignup';
  private baseUrl ='http://localhost:8080/api/auth/usera';
  private baseUrl1 ='http://localhost:8080/api/auth/user';


  constructor(private http: HttpClient,private token: TokenStorageService) {
  }

  

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }



  psignUp(info: PsignUpInfo): Observable<string> {
    return this.http.post<string>(this.psignupUrl, info, httpOptions);
  }


  ssignUp(info: SsignUpInfo): Observable<string> {
    return this.http.post<string>(this.ssignupUrl, info, httpOptions);
  }

  irsignUp(info: IrsignUpInfo): Observable<string> {
    return this.http.post<string>(this.irsignupUrl, info, httpOptions);
  }

  igsignUp(info: IgsignUpInfo): Observable<string> {
    return this.http.post<string>(this.igsignupUrl, info, httpOptions);
  }

 sendAnnounce(info: AnnounceReg): Observable<string> {
    return this.http.post<string>(this.announceregUrl, info, httpOptions);
  }


 RegLawyer(info: Lawyerreg): Observable<string> {
    return this.http.post<string>(this.reglawUrl, info, httpOptions);
  }






  preqsend(info: Preq): Observable<string> {
    return this.http.post<string>(this.preqUrl, info, httpOptions);
  }

  sreqsend(info: Sreq): Observable<string> {
    return this.http.post<string>(this.sreqUrl, info, httpOptions);
  }
  irreqsend(info: Irreq): Observable<string> {
    return this.http.post<string>(this.irreqUrl, info, httpOptions);
  }
  igreqsend(info: Igreq): Observable<string> {
    return this.http.post<string>(this.igreqUrl, info, httpOptions);
  }



  preqstatussend(info: Preqstatus): Observable<string> {
    return this.http.post<string>(this.preqstatusUrl, info, httpOptions);
  }

  updatepreqstatussend(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.preqstatusUrl}/${id}`, value);
  }

  sreqstatussend(info: Sreqstatus): Observable<string> {
    return this.http.post<string>(this.sreqstatusUrl, info, httpOptions);
  }
  irreqstatussend(info: Irreqstatus): Observable<string> {
    return this.http.post<string>(this.irreqstatusUrl, info, httpOptions);
  }
  igreqstatussend(info: Igreqstatus): Observable<string> {
    return this.http.post<string>(this.igreqstatusUrl, info, httpOptions);
  }





  getPreqByUname():Observable<Preq[]> {
    return this.http.get<Preq[]>('http://localhost:8080/api/auth/getuserareq/uname/'+this.token.getUsername());
  
  }

  getSreqByUname():Observable<Sreq[]> {
    return this.http.get<Sreq[]>('http://localhost:8080/api/auth/getuserbreq/uname/'+this.token.getUsername());
  
  }
  getIrreqByUname():Observable<Irreq[]> {
    return this.http.get<Irreq[]>('http://localhost:8080/api/auth/getuserdreq/uname/'+this.token.getUsername());
  
  }
  getIgreqByUname():Observable<Igreq[]> {
    return this.http.get<Igreq[]>('http://localhost:8080/api/auth/getusercreq/uname/'+this.token.getUsername());
  
  }


  getIrreqAll():Observable<Irreq[]> {return this.http.get<Irreq[]>('http://localhost:8080/api/auth/getuserdreq');}
  getIgreqAll():Observable<Igreq[]> {return this.http.get<Igreq[]>('http://localhost:8080/api/auth/getusercreq');}
  getPreqAll():Observable<Preq[]> {return this.http.get<Preq[]>('http://localhost:8080/api/auth/getuserareq');}
  getSreqAll():Observable<Sreq[]> {return this.http.get<Sreq[]>('http://localhost:8080/api/auth/getuserbreq');}

 
  deleteSreqbyid(id: Number): Observable<any> { return this.http.delete(`${this.sreqdeletebyidUrl}/${id}`, { responseType: 'text' });}
  deletePreqbyid(id: Number): Observable<any> { return this.http.delete(`${this.preqdeletebyidUrl}/${id}`, { responseType: 'text' });}
  deleteIgreqbyid(id: Number): Observable<any> { return this.http.delete(`${this.igreqdeletebyidUrl}/${id}`, { responseType: 'text' });}
  deleteIrreqbyid(id: Number): Observable<any> { return this.http.delete(`${this.irreqdeletebyidUrl}/${id}`, { responseType: 'text' });}


getPreqstatusByRunameByReqidByStatus(reqid: Number,runame: String,receiverstatus: String): Observable<Preqstatus> {
    return this.http.get<Preqstatus>('http://localhost:8080/api/auth/getuserareqstatusr/reqid/'+reqid+'/runame/'+runame+'/status/'+receiverstatus);

}
getSreqstatusByRunameByReqidByStatus(reqid: Number,runame: String,receiverstatus: String): Observable<Sreqstatus> {
  return this.http.get<Sreqstatus>('http://localhost:8080/api/auth/getuserbreqstatusr/reqid/'+reqid+'/runame/'+runame+'/status/'+receiverstatus);

}

getIgreqstatusByRunameByReqidByStatus(reqid: Number,runame: String,receiverstatus: String): Observable<Igreqstatus> {
  return this.http.get<Igreqstatus>('http://localhost:8080/api/auth/getusercreqstatusr/reqid/'+reqid+'/runame/'+runame+'/status/'+receiverstatus);

}

getIrreqstatusByRunameByReqidByStatus(reqid: Number,runame: String,receiverstatus: String): Observable<Irreqstatus> {
  return this.http.get<Irreqstatus>('http://localhost:8080/api/auth/getuserdreqstatusr/reqid/'+reqid+'/runame/'+runame+'/status/'+receiverstatus);

}





getPreqstatusByRuname(): Observable<Preqstatus[]> {
  return this.http.get<Preqstatus[]>('http://localhost:8080/api/auth/getuserareqstatus/runame/'+this.token.getUsername()+'/status/Accept');

}

getSreqstatusByRuname(): Observable<Sreqstatus[]> {
  return this.http.get<Sreqstatus[]>('http://localhost:8080/api/auth/getuserbreqstatus/runame/'+this.token.getUsername()+'/status/Accept');

}

getIgreqstatusByRuname(): Observable<Igreqstatus[]> {
  return this.http.get<Igreqstatus[]>('http://localhost:8080/api/auth/getusercreqstatus/runame/'+this.token.getUsername()+'/status/Accept');

}

getIrreqstatusByRuname(): Observable<Irreqstatus[]> {
  return this.http.get<Irreqstatus[]>('http://localhost:8080/api/auth/getuserdreqstatus/runame/'+this.token.getUsername()+'/status/Accept');

}





  mess(info: Susermess): Observable<string> {
    return this.http.post<string>(this.messUrl, info, httpOptions);
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }


  getCuss(): Observable<Cus[]> {
    return this.http.get<Cus[]>(`${this.baseUrl1}`);
  }

  deleteUsers(id: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }



  deleteCuss(id: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
  }

  deleteAllcus(): Observable<any> {
    return this.http.delete(`${this.baseUrl1}` + `/delete`, { responseType: 'text' });
  }






  getCusByUname(): Observable<Luser> {
    return this.http.get<Luser>('http://localhost:8080/api/auth/user/username/'+this.token.getUsername());
  }



  getIgByUname(): Observable<Iguser> {
    return this.http.get<Iguser>('http://localhost:8080/api/auth/userc/uname/'+this.token.getUsername());
  }
  getIrByUname(): Observable<Iruser> {
    return this.http.get<Iruser>('http://localhost:8080/api/auth/userd/uname/'+this.token.getUsername());
  }
  getPlByUname(): Observable<Puser> {
    return this.http.get<Puser>('http://localhost:8080/api/auth/usera/uname/'+this.token.getUsername());
  }
  getSlByUname(): Observable<Suser> {
    return this.http.get<Suser>('http://localhost:8080/api/auth/userb/uname/'+this.token.getUsername());

}


getMesByUname(): Observable<Rusermess[]> {
  return this.http.get<Rusermess[]>('http://localhost:8080/api/auth/usermess/fromuname/'+this.token.getUsername());

}

getRMesByUname(): Observable<Rusermess[]> {
  return this.http.get<Rusermess[]>('http://localhost:8080/api/auth/usermess/touname/'+this.token.getUsername());

}


getPusers(): Observable<Puser[]> {
  return this.http.get<Puser[]>('http://localhost:8080/api/auth/usera');
}

getSusers(): Observable<Suser[]> {
  return this.http.get<Suser[]>('http://localhost:8080/api/auth/userb');
}

getIgusers(): Observable<Iguser[]> {
  return this.http.get<Iguser[]>('http://localhost:8080/api/auth/userc');
}

getIrusers(): Observable<Iruser[]> {
  return this.http.get<Iruser[]>('http://localhost:8080/api/auth/userd');
}


getAnnounces(): Observable<Announce[]> {
  return this.http.get<Announce[]>('http://localhost:8080/api/auth/getannounce');
}

getLawyer(): Observable<Lawyer[]> {
  return this.http.get<Lawyer[]>('http://localhost:8080/api/auth/getlawyer');
}


getLawyerByTown(town: String): Observable<Lawyer[]> {
  return this.http.get<Lawyer[]>('http://localhost:8080/api/auth/getlawyer/town/'+town);
}



getIgByUnamea(name: String): Observable<Iguser> {
  return this.http.get<Iguser>('http://localhost:8080/api/auth/userc/uname/'+name);
}
getIrByUnamea(name: String): Observable<Iruser> {
  return this.http.get<Iruser>('http://localhost:8080/api/auth/userd/uname/'+name);
}
getPlByUnamea(name: String): Observable<Puser> {
  return this.http.get<Puser>('http://localhost:8080/api/auth/usera/uname/'+name);
}
getSlByUnamea(name: String): Observable<Suser> {
  return this.http.get<Suser>('http://localhost:8080/api/auth/userb/uname/'+name);

}


getCusByUnamea(name: String): Observable<Luser> {
  return this.http.get<Luser>('http://localhost:8080/api/auth/user/username/'+name);
}












}