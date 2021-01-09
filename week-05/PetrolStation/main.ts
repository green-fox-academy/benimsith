import { Car } from "./Car";
import { Station } from "./Station"

let car = new Car();
let station = new Station(1000);

console.log(`Station gas amount before refilling: ${station.getGasAmount} `);
station.refill(car);
console.log(`Station gas amount after refilling: ${station.getGasAmount} `);
console.log(`Car gas amount after refilling: ${car.getGasAmount}`);