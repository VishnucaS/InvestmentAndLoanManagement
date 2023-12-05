export class IrsignUpInfo  {
    uid:Number;
    uname:String;
    name: string;
    yearsofoccupation: string;
    salary: string;
    gname: string;
    gnic : string;
    gphonenumber: string;
    gjob : string;
    grelationship : string;


    constructor(uid:number,uname:string, name: string,  yearsofoccupation: string,  salary: string, gname: string ,gnic: string ,gphonenumber: string , gjob: string ,grelationship: string ) {
        this.uid=uid;
        this.uname=uname;
        this.name = name;
        this.yearsofoccupation = yearsofoccupation;
        this.salary = salary;
        this.gname = gname;
        this.gnic = gnic;
        this.gphonenumber = gphonenumber;
        this.gjob = gjob;
        this.grelationship = grelationship;

       
    }
}
