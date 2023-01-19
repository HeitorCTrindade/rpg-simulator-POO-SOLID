import { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;     
  }

  receiveDamage(attackPoints: number): number {
    const newLifePoints = this._lifePoints - attackPoints;
    if (newLifePoints > 0) {
      this._lifePoints = newLifePoints;
    } else {
      this._lifePoints = -1;
    }       
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }  
}
