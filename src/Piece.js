import './Piece.css'

class Piece{

  constructor(isBlackPiece,isInitPos ,pieceType, pieceImage){
    this.isBlackPiece=isBlackPiece;
    this.isInitPos=isInitPos;
    this.pieceImage=pieceImage;
    this.pieceType=pieceType;
    this.possiblePaths=[[false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                      ];
  }

}

export default Piece;
