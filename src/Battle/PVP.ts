import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      this._player2.special(this.player);
      this.player.special(this._player2);       
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

// DUVIDA REQ. 10 & 8
// 10 - mUDAR Character PARA fIGHTER 

// 8 - QUAL DEVE SER A SUB INTERFACE