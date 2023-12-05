export class SignUpInfo {
 
    name: string;
    dateofbirth:Date;
    nic: string;
    address: string;
    mobilenum: string;
    profession: string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor(  name: string, dateofbirth:Date ,nic: string, address: string ,mobilenum: string, profession: string, username: string, email: string, password: string) {
        
        
        this.name = name;
        this.dateofbirth = dateofbirth;
        this.nic = nic;
        this.address = address;
        this.mobilenum = mobilenum;
        this.profession = profession;
        this.username = username;
        this.email = email;
        this.password = password;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
