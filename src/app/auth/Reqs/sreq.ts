export class Sreq {
    id:Number;

    uname:String;
    amount:Number;
    duration:Number;
    rate:Number;
    negotiation: string;
   
    date: string;

    constructor( uname:String,amount:number,duration:number, rate:number, negotiation: string, date: string) {
        this.uname=uname;
        this.amount = amount;
        this.duration = duration;
        this.rate = rate;
        this.negotiation = negotiation;
        this.date=date;
    }
}
