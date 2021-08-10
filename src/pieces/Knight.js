import Piece from './Piece'

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

export default Knight