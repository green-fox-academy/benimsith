import { Car } from "./Car";
class Station {
    private gasAmount: number;

    constructor(gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    public refill(car: Car) {
        this.gasAmount = this.gasAmount - car.getCapacity;
        car.setGasAmount;
        return this.gasAmount;
    }

    public get getGasAmount(): number {
        return this.gasAmount;
    }

}

export { Station };
