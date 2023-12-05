export class PsignUpInfo {
    uid:Number;
    uname:String;
    name: string;
    minage: string;
    minsalary: string;
    about: string;

    constructor(uid:number,uname:string, name: string,  minage: string, minsalary: string, about: string) {
        this.uid=uid;
        this.uname=uname;
        this.name = name;
        this.minage =  minage;
        this.minsalary = minsalary;
        this.about = about;
       
    }
}
