export class Products {

    public prodId: number;
    public name: string;
    public company: string;
    public imgPath: string;
    public quantity: number;
    public price: number;



    constructor(prodId:number,name: string, company: string, imgPath: string, quantity: number, price: number) {
        this.prodId= prodId;
        this.name = name;
        this.company = company;
        this.imgPath = imgPath;
        this.quantity = quantity;
        this.price = price;

    }

}