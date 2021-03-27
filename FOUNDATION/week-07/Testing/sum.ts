export class Sum{
 public sum(integers:number[]):number{
   let sum: number = 0;
   for (let i: number = 0; i < integers.length; i++){
     sum += integers[i];
   }
   return sum;
  }

}

export class Sum2{
  public sum2(x: number, y: number) {
    return x + y;
  }
}