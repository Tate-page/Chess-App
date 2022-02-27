function generatePossiblePaths(chessBoard, y,x){

  if(chessBoard.board[y][x].pieceType==="Pawn"){
    generatePawnPaths(chessBoard, y, x);
  }else if(chessBoard.board[y][x].pieceType==="Knight"){
    generateKnightPaths(chessBoard, y, x);
  }else if(chessBoard.board[y][x].pieceType==="Rook"){
    generateRookPaths(chessBoard, y, x);
  }else if(chessBoard.board[y][x].pieceType==="Bishop"){
    generateBishopPaths(chessBoard, y, x);
  }else if(chessBoard.board[y][x].pieceType==="Queen"){
    generateRookPaths(chessBoard, y, x);
    generateBishopPaths(chessBoard, y, x);
  }else{
    generateKingPaths(chessBoard, y, x);
  }
}

function generateKingPaths(chessBoard, y, x){
  var currentY=y+1;
  var currentX=x-1;
  //up 1
  if(currentY<8){
    //up right
    if(currentX>-1 ){
      if(chessBoard.board[y][x]=="0"){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
          chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }
    }
    //up middle
    currentX++;
    if(chessBoard.board[y][x]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }
    //up left
    currentX++;
    if(currentX<8 ){
      if(chessBoard.board[y][x]=="0"){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }
    }
  }
  //middle left
  currentY--;
  if(currentY>-1){
    if(chessBoard.board[y][x]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }
    //middle right
    currentX-=2;
    if(currentX>-1 ){
      if(chessBoard.board[y][x]=="0"){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
          chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }
    }
  }
  //down 1
  currentY--;
  if(currentY>-1){
    //down right
    if(chessBoard.board[y][x]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }
    //down middle
    currentX++;
    if(currentX<8 ){
      if(chessBoard.board[y][x]=="0"){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
          chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }
    }
    currentX++;
    if(currentX<8){
      if(chessBoard.board[y][x]=="0"){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }else if((chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece)){
        chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      }
    }
  }
}

function generateBishopPaths(chessBoard, y, x){
  var isPathBlocked=false;
  let currentX=x+1;
  let currentY=y+1;
  //y-pos x-positive
  while(currentY<8 && currentX<8 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentY++;
    currentX++;
  }
  //y-pos x-negative
  isPathBlocked=false;
  currentX=x-1;
  currentY=y+1;
  while(currentY<8 && currentX>-1 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentX--;
    currentY++;
  }
  //y-negative x-positive
  isPathBlocked=false;
  currentX=x+1;
  currentY=y-1
  while(currentY>-1 && currentX<8 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentX++;
    currentY--;
  }
  //y-negative x-positive
  isPathBlocked=false;
  currentX=x-1;
  currentY=y-1;
  while(currentY>-1 && currentX>-1 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentX--;
    currentY--;
  }
}

function generateRookPaths(chessBoard, y, x){
  var isPathBlocked=false;
  let currentX=x;
  let currentY=y+1;
  //y positive
  while(currentY<8 && isPathBlocked===false){
    console.log(chessBoard.board[currentY][currentX]);
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentY++;
  }
  //y negative
  currentX=x;
  currentY=y-1;
  isPathBlocked=false;
  while(currentY>-1 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentY--;
  }
  //x positive
  currentX=x+1;
  currentY=y;
  isPathBlocked=false;
  while(currentX<8 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentX++;
  }
  //x negative
  currentX=x-1;
  currentY=y;
  isPathBlocked=false;
  while(currentX>-1 && isPathBlocked===false){
    if(chessBoard.board[currentY][currentX]=="0"){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
    }else if(chessBoard.board[y][x].isBlackPiece!==chessBoard.board[currentY][currentX].isBlackPiece){
      chessBoard.board[y][x].possiblePaths[currentY][currentX]=true;
      isPathBlocked=true;
    }else{
      isPathBlocked=true;
    }
    currentX--;
  }

}

function generateKnightPaths(chessBoard, y, x){
  //up 2
  if(y+2<8){
    //right 1
    if(x+1<8){
      if(chessBoard.board[y+2][x+1]=="0"){
        chessBoard.board[y][x].possiblePaths[y+2][x+1]=true;
      }
      if(chessBoard.board[y+2][x+1]!="0"){
        if(chessBoard.board[y+2][x+1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+2][x+1].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y+2][x+1]=true;
        }
      }
    }
    //left 1
    if(x-1>-1){
      if(chessBoard.board[y+2][x-1]=="0"){
        chessBoard.board[y][x].possiblePaths[y+2][x-1]=true;
      }
      if(chessBoard.board[y+2][x-1]!="0"){
        if(chessBoard.board[y+2][x-1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+2][x-1].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y+2][x-1]=true;
        }
      }
    }
  }
  //up 1
  if(y+1<8){
    //right 2
    if(x+2<8){
      if(chessBoard.board[y+1][x+2]=="0"){
        chessBoard.board[y][x].possiblePaths[y+1][x+2]=true;
      }
      if(chessBoard.board[y+1][x+2]!="0"){
        if(chessBoard.board[1+2][x+2].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+1][x+2].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y+1][x+2]=true;
        }
      }
    }
    //left 2
    if(x-2>-1){
      if(chessBoard.board[y+1][x-2]=="0"){
        chessBoard.board[y][x].possiblePaths[y+1][x-2]=true;
      }
      if(chessBoard.board[y+1][x-2]!="0"){
        if(chessBoard.board[y+1][x-2].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+1][x-2].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y+1][x-2]=true;
        }
      }
    }
  }
  //down 1
  if(y-1>-1){
    //right 2
    if(x+2<8){
      if(chessBoard.board[y-1][x+2]=="0"){
        chessBoard.board[y][x].possiblePaths[y-1][x+2]=true;
      }
      if(chessBoard.board[y-1][x+2]!="0"){
        if(chessBoard.board[y-1][x+2].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-1][x+2].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y-1][x+2]=true;
        }
      }
    }
    //left 2
    if(x-2>-1){
      if(chessBoard.board[y-1][x-2]=="0"){
        chessBoard.board[y][x].possiblePaths[y-1][x-2]=true;
      }
      if(chessBoard.board[y-1][x-2]!="0"){
        if(chessBoard.board[y-1][x-2].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-1][x-2].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y-1][x-2]=true;
        }
      }
    }
  }
  //down 2
  if(y-2>-1){
    if(x+1<8){
      if(chessBoard.board[y-2][x+1]=="0"){
        chessBoard.board[y][x].possiblePaths[y-2][x+1]=true;
      }
      if(chessBoard.board[y-2][x+1]!="0"){
        if(chessBoard.board[y-2][x+1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-2][x+1].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y-2][x+1]=true;
        }
      }
    }
    //left 1
    if(x-1>-1){
      if(chessBoard.board[y-2][x-1]=="0"){
        chessBoard.board[y][x].possiblePaths[y-2][x-1]=true;
      }
      if(chessBoard.board[y-2][x-1]!="0"){
        if(chessBoard.board[y-2][x-1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-2][x-1].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y-2][x-1]=true;
        }
      }
    }

    //right 1
    if(x+1>8){
      if(chessBoard.board[y-2][x+1]=="0"){
        chessBoard.board[y][x].possiblePaths[y-2][x+1]=true;
      }
      if(chessBoard.board[y-2][x+1]!="0"){
        if(chessBoard.board[y-2][x+1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-2][x+1].pieceType!=="King"){
          chessBoard.board[y][x].possiblePaths[y-2][x+1]=true;
        }
      }
    }
  }
}


function generatePawnPaths(chessBoard, y, x){

  if(chessBoard.board[chessBoard.clickedY][chessBoard.clickedX].isBlackPiece===true){//black pawns
    if(y<7){
      if(chessBoard.board[y+1][x]=="0"){
        chessBoard.board[chessBoard.clickedY][chessBoard.clickedX].possiblePaths[y+1][x]=true;//pawn move forward
        if(y<6){
          if(chessBoard.board[y+2][x]=="0" && chessBoard.board[y][x].isInitPos===true){
            chessBoard.board[chessBoard.clickedY][chessBoard.clickedX].possiblePaths[y+2][x]=true;//pawn move forward 2
          }
        }
    }
    if(x<7){
        if(chessBoard.board[y+1][x+1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+1][x+1]!="0"){
          chessBoard.board[y][x].possiblePaths[y+1][x+1]=true;//pawn take piece to the front right
        }
      }
      if(x>0){
        if(chessBoard.board[y+1][x-1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y+1][x-1]!="0"){
          chessBoard.board[y][x].possiblePaths[y+1][x-1]=true;//pawn takes piece to the front left
        }
      }
    }
  }else{//white pawns
    //move pieces forward
    if(y>0){
      if(chessBoard.board[y-1][x]=="0"){
        chessBoard.board[y][x].possiblePaths[y-1][x]=true;//pawn move forward 1
        if(y>1){
          if(chessBoard.board[y-2][x]=="0" && chessBoard.board[y][x].isInitPos===true){
              chessBoard.board[y][x].possiblePaths[y-2][x]=true;//pawn move forward 2
          }
        }
      }
      //take pieces
      if(x<7){
        if(chessBoard.board[y-1][x+1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-1][x+1]!="0"){
          console.log("here");
          chessBoard.board[y][x].possiblePaths[y-1][x+1]=true;//pawn take piece to the front right
        }
      }
      if(x>0){
        if(chessBoard.board[y-1][x-1].isBlackPiece!==chessBoard.board[y][x].isBlackPiece && chessBoard.board[y-1][x-1]!="0"){
          chessBoard.board[y][x].possiblePaths[y-1][x-1]=true;
        }
      }
    }
  }
}



function areOpposingPieces(chessBoard, y1,x1,y2,x2){
  if(chessBoard.board[y1][x1]=="0" || chessBoard.board[y2][x2]=="0"){
    return false;
  }else if(chessBoard.board[y1][x1] == chessBoard.board[y2][x2]){
    return false;
  }
  return true;
}


export default generatePossiblePaths;
