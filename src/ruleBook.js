import React from "react";
function ruleBook(chessBoard, newY, newX){
  if(chessBoard.board[chessBoard.clickedY][chessBoard.clickedX].possiblePaths[newY][newX]){
    if(chessBoard.board[chessBoard.clickedY][chessBoard.clickedX]=="0"){
      return "the tile you initially selected is empty."
    }else{
      if(chessBoard.board[newY][newX]!==0){//if the new Tile isn't empty
        if(chessBoard.board[chessBoard.clickedY][chessBoard.clickedX].isBlackPiece === chessBoard.board[newY][newX].isBlackPiece){
          return "the selected pieces are on the same team";
        }
      }
    }
  }else{
    return "the tile you want to move to is not within the legal paths for this piece";
  }


  return true;
}
export default ruleBook;
