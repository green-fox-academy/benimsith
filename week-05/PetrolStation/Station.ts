import {Car} from "./Car";
 export class Station {
    private gasAmount: number;

    constructor(gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    public refill(car: Car) {
        this.gasAmount = this.gasAmount - car.getCapacity;
        car.setGasAmount;

    }

    public get getGasAmount(): number {
        return this.gasAmount;
    }

}
