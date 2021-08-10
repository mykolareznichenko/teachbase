import initialiseChessBoard from '../helpFunction/initialiseChessBoard'

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

export default Board