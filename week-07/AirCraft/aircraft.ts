export class Aircraft{
    name: string;
    maxAmmo: number;
    baseDamage: number;
    ammo: number;
  
    constructor(name: string, maxAmmo: number, baseDamage: number, ammo: number){
      this.name = name;
      this.maxAmmo = maxAmmo;
      this.baseDamage = baseDamage;
      this.ammo = 0;
    }
  
    fight():number {
      let damageDealt: number = this.ammo * this.baseDamage;
      return damageDealt;
    }
  
    refill(quantity: number): number{
  
  
    }
  }