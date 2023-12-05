export class Irreq {
    id:Number;
    uname:String;
    area:String;
    amount:Number;
    duration:Number;
    rate:Number;
    negotiation: string;
    date: string;

    constructor( uname:String,area:String,amount:number,duration:number, rate:number, negotiation: string, date: string) {
        this.uname=uname;
        this.area=area;
        this.amount = amount;
        this.duration = duration;
        this.rate = rate;
        this.negotiation = negotiation;
        this.date=date;
 
    }
}
