export class FactoryConfiguration {
    price:number;
    ips:number;
    upgrade_price:number;
    description:string;
    image:string;

    constructor(price:number,ips:number,upgrade_price:number,description:string,image:string) {
        this.price = price;
        this.ips = ips;
        this.upgrade_price = upgrade_price;
        this.description = description;
        this.image = image;
    } 

}
