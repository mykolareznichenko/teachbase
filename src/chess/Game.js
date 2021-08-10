import Board from './Board'

class Game extends Board {
   constructor() {
      super()
      this.state = {
         whiteFallenSoldiers: [],
         blackFallenSoldiers: [],
         player: 1,
         sourceSelection: -1,
         turn: 'white'
      }
   }

   checkMove(i) {
      const squares = this.squares.slice();

      if (this.state.sourceSelection === -1) {
         if (!squares[i] || squares[i].player !== this.state.player) {
            console.log("Wrong selection. Choose player " + this.state.player + " pieces.")
         }
         else {
            console.log("Choose destination for the selected piece")
            this.state.sourceSelection = i
         }
      }

      else if (this.state.sourceSelection > -1) {
         if (squares[i] && squares[i].player === this.state.player) {
            console.log("Wrong selection. Choose valid source and destination again.")
            this.state.sourceSelection = -1
         }
         else {

            const squares = this.squares.slice();
            const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
            const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
            const isDestEnemyOccupied = squares[i] ? true : false;
            const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
            const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
            const isMoveLegal = this.isMoveLegal(srcToDestPath);

            if (isMovePossible && isMoveLegal) {
               if (squares[i] !== null) {
                  if (squares[i].player === 1) {
                     whiteFallenSoldiers.push(squares[i]);
                  }
                  else {
                     blackFallenSoldiers.push(squares[i]);
                  }
               }
               console.log("Moved!!!")
               squares[i] = squares[this.state.sourceSelection];
               squares[this.state.sourceSelection] = null;
               let player = this.state.player === 1 ? 2 : 1;
               let turn = this.state.turn === 'white' ? 'black' : 'white';
               this.state = {
                  sourceSelection: -1,
                  whiteFallenSoldiers: whiteFallenSoldiers,
                  blackFallenSoldiers: blackFallenSoldiers,
                  player: player,
                  turn: turn
               }
               this.squares = squares
            }
            else {
               console.log("Wrong selection. Choose valid source and destination again.")
               this.state.sourceSelection = -1
            }
         }
      }
   }

   isMoveLegal(srcToDestPath) {
      let isLegal = true;
      for (let i = 0; i < srcToDestPath.length; i++) {
         if (this.squares[srcToDestPath[i]] !== null) {
            isLegal = false;
         }
      }
      return isLegal;
   }
}

export default Game