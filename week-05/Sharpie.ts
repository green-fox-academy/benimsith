class Sharpie{
    color:string;
    width:number;
    inkAmount:number = 100;

    constructor(color:string,width:number) {
        this.color=color;
        this.width=width;
    }

    public use(){
        this.inkAmount--;
        return this.inkAmount;
    }

}
let blackSharpie = new Sharpie('black',5.1);
let pinkSharpie = new Sharpie('pink',3.2);
pinkSharpie.use();
pinkSharpie.use();
console.log(blackSharpie);
console.log(pinkSharpie);
