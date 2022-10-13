export class Customer {
    public id : string;
    public name : string;
    public email : string;
    public phoneNo : number;
    public address: string;
    public dateTime: string;
     
    constructor(id: string , name : string, email : string, phoneNo : number,address: string, dateTime:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.address = address;
        this.dateTime = dateTime;
    }
}