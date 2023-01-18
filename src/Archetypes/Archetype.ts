export default abstract class Race {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._special = 0;    
    this._cost = 0;    
  }

  get name() { 
    return this._name;
  }

  get special() { 
    return this._special;
  }

  

  static createdRacesInstances(): number {
    throw new Error('Not implemented');        
  }

  abstract get maxLifePoints(): number;
