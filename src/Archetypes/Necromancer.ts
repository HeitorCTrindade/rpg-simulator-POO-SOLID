import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';    
    Necromancer.instances += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;
  }  

  static createdArchetypeInstances() {
    return this.instances;
  }
}