export class Sreqstatus 
{
    id:Number;
    reqid:Number;
    runame:String;
    suname:String;
    receiverstatus:String;
    senderstatus:String;
    lawyer:String;
    comments:String;

    constructor(reqid:Number,runame:String,suname:String,receiverstatus:String, senderstatus:String,lawyer:String,comments:String) 
    {
        this. reqid= reqid;
        this.runame = runame;
        this.suname = suname;
        this.receiverstatus = receiverstatus;
        this.senderstatus =senderstatus;
        this.lawyer = lawyer;
        this.comments = comments;

    }


}
