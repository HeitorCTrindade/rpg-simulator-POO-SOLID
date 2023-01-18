import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;   
  }

  get lifePoints() { 
    return this._lifePoints;
  }

  get strength() { 
    return this._strength;
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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }  
}