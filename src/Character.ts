import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name() { 
    return this._name;
  }

  get race() { 
    return this._race;
  }

  get archetype() { 
    return this._archetype;
  }

  get lifePoints() { 
    return this._lifePoints;
  }

  get strength() { 
    return this._strength;
  }

  get defense() { 
    return this._defense;
  }

  get dexterity() { 
    return this._dexterity;
  }

  get energy() { 
    const energy: Energy = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return energy;
  }

  private checkDamage() {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  private checkMaxValueLifePoints() {
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    this.checkDamage();
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this.checkMaxValueLifePoints();
    console.log(this._maxLifePoints);    
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }  

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * getRandomInt(1, 3));
  }
}