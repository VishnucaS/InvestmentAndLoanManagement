export class IgsignUpInfo {
    uid:Number;
    uname:String;
    name: string;
    areas: string;
    minrate: string;
    about: string;

    constructor(uid:number,uname:string, name: string, areas: string, minrate: string, about: string) {
        this.uid=uid;
        this.uname=uname;
        this.name = name;
        this.areas = areas;
        this.minrate = minrate;
        this.about = about;
       
    }
}
