// Реализовать структуру данных для игры в шахматы

class Board {
   constructor() {
      this.squares = initialiseChessBoard()
   }

   getBoardState() {
      console.log(this.squares)
   }

   makeMove(start, end) {
      this.checkMove(start)
      this.checkMove(end)
      this.getBoardState()
   }
}

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

class Piece {
   constructor(player) {
      this.player = player;
   }
}

class King extends Piece {
   constructor(player) {
      super(player);
   }

   isMovePossible(src, dest) {
      return (src - 9 === dest ||
         src - 8 === dest ||
         src - 7 === dest ||
         src + 1 === dest ||
         src + 9 === dest ||
         src + 8 === dest ||
         src + 7 === dest ||
         src - 1 === dest);
   }

   getSrcToDestPath(src, dest) {
      return [];
   }
}

class Queen extends Piece {
   constructor(player) {
      super(player);
   }

   isMovePossible(src, dest) {
      let mod = src % 8;
      let diff = 8 - mod;

      return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0) ||
         (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
   }

   getSrcToDestPath(src, dest) {
      let path = [], pathStart, pathEnd, incrementBy;
      if (src > dest) {
         pathStart = dest;
         pathEnd = src;
      }
      else {
         pathStart = src;
         pathEnd = dest;
      }
      if (Math.abs(src - dest) % 8 === 0) {
         incrementBy = 8;
         pathStart += 8;
      }
      else if (Math.abs(src - dest) % 9 === 0) {
         incrementBy = 9;
         pathStart += 9;
      }
      else if (Math.abs(src - dest) % 7 === 0) {
         incrementBy = 7;
         pathStart += 7;
      }
      else {
         incrementBy = 1;
         pathStart += 1;
      }

      for (let i = pathStart; i < pathEnd; i += incrementBy) {
         path.push(i);
      }
      return path;
   }
}

class Bishop extends Piece {
   constructor(player) {
      super(player);
   }

   isMovePossible(src, dest) {
      return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
   }

   getSrcToDestPath(src, dest) {
      let path = [], pathStart, pathEnd, incrementBy;
      if (src > dest) {
         pathStart = dest;
         pathEnd = src;
      }
      else {
         pathStart = src;
         pathEnd = dest;
      }
      if (Math.abs(src - dest) % 9 === 0) {
         incrementBy = 9;
         pathStart += 9;
      }
      else {
         incrementBy = 7;
         pathStart += 7;
      }

      for (let i = pathStart; i < pathEnd; i += incrementBy) {
         path.push(i);
      }
      return path;
   }
}

class Knight extends Piece {
   constructor(player) {
      super(player);
   }

   isMovePossible(src, dest) {
      return (src - 17 === dest ||
         src - 10 === dest ||
         src + 6 === dest ||
         src + 15 === dest ||
         src - 15 === dest ||
         src - 6 === dest ||
         src + 10 === dest ||
         src + 17 === dest);
   }

   getSrcToDestPath() {
      return [];
   }
}

class Rook extends Piece {
   constructor(player) {
      super(player);
   }

   isMovePossible(src, dest) {
      let mod = src % 8;
      let diff = 8 - mod;
      return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
   }

   getSrcToDestPath(src, dest) {
      let path = [], pathStart, pathEnd, incrementBy;
      if (src > dest) {
         pathStart = dest;
         pathEnd = src;
      }
      else {
         pathStart = src;
         pathEnd = dest;
      }
      if (Math.abs(src - dest) % 8 === 0) {
         incrementBy = 8;
         pathStart += 8;
      }
      else {
         incrementBy = 1;
         pathStart += 1;
      }

      for (let i = pathStart; i < pathEnd; i += incrementBy) {
         path.push(i);
      }
      return path;
   }
}

class Pawn extends Piece {
   constructor(player) {
      super(player);
      this.initialPositions = {
         1: [48, 49, 50, 51, 52, 53, 54, 55],
         2: [8, 9, 10, 11, 12, 13, 14, 15]
      }
   }

   isMovePossible(src, dest, isDestEnemyOccupied) {

      if (this.player === 1) {
         if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {
            return true;
         }
         else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
            return true;
         }
      }
      else if (this.player === 2) {
         if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {
            return true;
         }
         else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {
            return true;
         }
      }
      return false;
   }

   getSrcToDestPath(src, dest) {
      if (dest === src - 16) {
         return [src - 8];
      }
      else if (dest === src + 16) {
         return [src + 8];
      }
      return [];
   }
}

function initialiseChessBoard() {
   const squares = Array(64).fill(null);

   for (let i = 8; i < 16; i++) {
      squares[i] = new Pawn(2);
      squares[i + 40] = new Pawn(1);
   }
   squares[0] = new Rook(2);
   squares[7] = new Rook(2);
   squares[56] = new Rook(1);
   squares[63] = new Rook(1);

   squares[1] = new Knight(2);
   squares[6] = new Knight(2);
   squares[57] = new Knight(1);
   squares[62] = new Knight(1);

   squares[2] = new Bishop(2);
   squares[5] = new Bishop(2);
   squares[58] = new Bishop(1);
   squares[61] = new Bishop(1);

   squares[3] = new Queen(2);
   squares[4] = new King(2);

   squares[59] = new Queen(1);
   squares[60] = new King(1);

   return squares;
}

const newGame = new Game()
newGame.makeMove(52, 36)
newGame.makeMove(12, 28)
newGame.makeMove(61, 34)
newGame.makeMove(8, 16)
newGame.makeMove(59, 45)
newGame.makeMove(16, 24)
newGame.makeMove(45, 13)
newGame.makeMove(24, 32)
