import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Character;

  constructor(player1: Character, player2: Character) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    console.log('player 1: initial'+this.player.lifePoints);
    console.log('player 2: initial'+this._player2.lifePoints); 
    while (this.player.lifePoints !== -1 || this._player2.lifePoints !== -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      // this._player2.special(this.player);
      // this.player.special(this._player2);
      console.log('player 1:'+this.player.lifePoints);
      console.log('player 2:'+this._player2.lifePoints);      
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

// const fight = (battle: Battle) => battle.fight();

// const result = () => {
//   const player1 = new Character('');
//   for (let i = 0; i < 500; i++) player1.levelUp();
//   const player2 = new Character('');
//   const pvp1 = new PVP(player1, player2);

//   const player3 = new Character('');
//   for (let i = 0; i < 500; i++) player3.levelUp();
//   const player4 = new Character('');
//   const pvp2 = new PVP(player4, player3);

//   console.log('player 1 deve ganhar: --------');
//   pvp1.fight();
//   console.log('player 3 deve ganhar: --------');
//   pvp2.fight();
// };

// console.log(result());
