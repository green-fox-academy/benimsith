export class Car{
    private gasAmount: number;
    private capacity: number;

    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }

    public get getGasAmount(): number {
        return this.gasAmount;
    }

    public get getCapacity(): number {
        return this.capacity;
    }

    public set setGasAmount(value: number) {
        this.gasAmount = this.capacity;
    }
}