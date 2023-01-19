import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enimies: SimpleFighter[];

  constructor(player1: Fighter, enimies: SimpleFighter[]) {
    super(player1);
    this._enimies = enimies;
  }

  fight(): number {
    const isDeath = this._enimies.some((enemy) => {
      while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
        this.player.attack(enemy);
        enemy.attack(this.player);    
        this.player.special(enemy);       
      }      
      return this.player.lifePoints === -1;
    });

    return isDeath === true ? -1 : 1;
  }

  // fight(): number {
  //   // let number = 0;
  //   for (let i = 0; i < this._enimies.length; i += 1) {
  //     while (this.player.lifePoints 
  //       !== -1 && this._enimies[i].lifePoints !== -1) {
  //       this.player.attack(this._enimies[i]);
  //       this._enimies[i].attack(this.player);    
  //       this.player.special(this._enimies[i]);       
  //     }
  //     if (this.player.lifePoints === -1) return -1;
  //   }
  //   return 1;
  // }
}
