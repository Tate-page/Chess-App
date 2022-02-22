function generatePossiblePaths(chessBoard, y,x){

  if(chessBoard.board[y][x].pieceType==="Pawn"){
    generatePawnPaths(chessBoard, y, x);
  }else if(chessBoard.board[y][x].pieceType==="Knight"){

  }

}

function generatePawnPaths(chessBoard, y, x){

  if(chessBoard.board[y][x].isBlackPiece===true){//black pawns
    if(y<7){

      if(chessBoard.board[y+1][x]=="0"){

        chessBoard.board[y][x].possiblePaths[y+1][x]=true;//pawn move forward
        if(y<6){
          if(chessBoard.board[y+2][x]=="0" && chessBoard.board[y][x].isInitPos===true)
            chessBoard.board[y][x].possiblePaths[y+2][x]=true;//pawn move forward 2
        }
      }
      if(x<7){
        if(areOpposingPieces(chessBoard, y,x,y+1,x+1)){
          chessBoard.board[y][x].possiblePaths[y+1][x+1]=true;//pawn take piece to the front right
        }
      }
      if(x>0){
        if(areOpposingPieces(chessBoard, y,x,y+1,x-1)){
          chessBoard.board[y][x].possiblePaths[y+1][x-1]=true;//pawn takes piece to the front left
        }
      }
    }
  }else{//white pawns
    if(y>0){
      if(chessBoard.board[y-1][x]=="0"){
        
        chessBoard.board[y][x].possiblePaths[y-1][x]=true;//pawn move forward 1
        if(y>1){
          if(chessBoard.board[y-2][x]=="0" && chessBoard.board[y][x].isInitPos===true){
              chessBoard.board[y][x].possiblePaths[y-2][x]=true;//pawn move forward 2

          }

        }
      }
      if(x<7){
        if(areOpposingPieces(chessBoard, y,x,y-1,x+1)){
          chessBoard.board[y][x].possiblePaths[y-1][x+1]=true;//pawn take piece to the front right
        }
      }
      if(x>0){
        if(areOpposingPieces(chessBoard, y,x,y-1,x-1)){
          chessBoard.board[y][x].possiblePaths[y-1][x-1]=true;//pawn takes piece to the front left
        }
      }
    }

  }

}

function generateKnightPaths(){

}

function areOpposingPieces(chessBoard, y1,x1,y2,x2){
  if(chessBoard.board[y1][x1]=="0" || chessBoard.board[y2][x2]=="0"){
    return false;
  }else if(chessBoard.board[y1][x1] === chessBoard.board[y2][x2]){
    return false;
  }
  return true;
}


export default generatePossiblePaths;
