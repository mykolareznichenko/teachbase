import Piece from './Piece'

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

export default King