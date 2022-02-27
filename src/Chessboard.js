import React from 'react';
import Piece from './Piece.js';
import "./Chessboard.css"
import Tile from './Tile.js'
import GameNav from './GameNav.js'
import ruleBook from './ruleBook.js'
import generatePossiblePaths from './generatePossiblePaths.js'
import BlackRook from "./images/Chess_rdt60.png"
import BlackKnight from "./images/Chess_ndt60.png"
import BlackBishop from "./images/Chess_bdt60.png"
import BlackQueen from "./images/Chess_qdt60.png"
import BlackKing from "./images/Chess_kdt60.png"
import BlackPawn from "./images/Chess_pdt60.png"
import WhiteRook from "./images/Chess_wrlt60.png"
import WhiteKnight from "./images/Chess_wnlt60.png"
import WhiteBishop from "./images/Chess_wblt60.png"
import WhiteQueen from "./images/Chess_wqlt60.png"
import WhiteKing from "./images/Chess_wklt60.png"
import WhitePawn from "./images/Chess_wplt60.png"
import HighLight from "./images/highLightimg.png"

class Chessboard extends React.Component{


  //the chessboard should be added from an sql db at some point
  constructor(props){
    super(props);
    this.state = {
      board: [[null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null],
              ],
      clickedX: null,
      clickedY: null,
      childVisible: true,
      isTileSelected: false,
      isBlackTurn: false,
    };
    this.filldefaultboard=this.filldefaultboard.bind(this);
  }


  filldefaultboard(value){

    const BR1=new Piece(true, true, "Rook", require("./images/Chess_bdt60.png"));
    const BN1=new Piece(true, true, "Knight", require("./images/Chess_ndt60.png"));
    const BB1=new Piece(true, true, "Bishop", require("./images/Chess_bdt60.png"));
    const BQ=new Piece(true, true, "Queen", require("./images/Chess_qdt60.png"));
    const BK=new Piece(true, true, "King", require("./images/Chess_kdt60.png"));
    const BB2=new Piece(true, true, "Bishop", require("./images/Chess_bdt60.png"));
    const BN2=new Piece(true, true, "Knight", require("./images/Chess_ndt60.png"));
    const BR2=new Piece(true, true, "Rook", require("./images/Chess_bdt60.png"));
    const BP1=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP2=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP4=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP3=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP5=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP6=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP7=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));
    const BP8=new Piece(true, true, "Pawn", require("./images/Chess_pdt60.png"));

    const WR1=new Piece(false, true, "Rook", require("./images/Chess_wrlt60.png"));
    const WN1=new Piece(false, true, "Knight", require("./images/Chess_wnlt60.png"));
    const WB1=new Piece(false, true, "Bishop", require("./images/Chess_wblt60.png"));
    const WQ=new Piece(false, true, "Queen", require("./images/Chess_wqlt60.png"));
    const WK=new Piece(false, true, "King", require("./images/Chess_wklt60.png"));
    const WB2=new Piece(false, true, "Bishop", require("./images/Chess_wblt60.png"));
    const WN2=new Piece(false, true, "Knight", require("./images/Chess_wnlt60.png"));
    const WR2=new Piece(false, true, "Rook", require("./images/Chess_wblt60.png"));
    const WP1=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP3=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP2=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP4=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP5=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP6=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP7=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));
    const WP8=new Piece(false, true, "Pawn", require("./images/Chess_wplt60.png"));


    if(value === "HotSeat"){
      this.setState({board: [[BR1, BN1, BB1, BK, BQ, BB2, BN2, BR2],
                            [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8],
                            [WR1, WN1, WB1, WK, WQ, WB2, WN2, WR2]
                            ],
                          childVisible: false}
      );
    }
  }

  findHighlightPaths(j, i){
    if(this.state.isTileSelected){
      if(this.state.board[this.state.clickedY][this.state.clickedX].possiblePaths[j][i]){
        console.log("HighLight");
        return HighLight;
      }
    }
    return "";
  }

  findpieceimage(y,x){

    if(this.state.board[y][x]===null){
      return "";
    }else if(this.state.board[y][x].pieceType==="Rook"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackRook;
      }
      else {
        return WhiteRook;
      }
    }else if(this.state.board[y][x].pieceType==="Knight"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackKnight;
      }
      else {
        return WhiteKnight;
      }
    }else if(this.state.board[y][x].pieceType==="Bishop"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackBishop;
      }
      else {
        return WhiteBishop;
      }
    }else if(this.state.board[y][x].pieceType==="King"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackKing;
      }
      else {
        return WhiteKing;
      }
    }else if(this.state.board[y][x].pieceType==="Queen"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackQueen;
      }
      else {
        return WhiteQueen;
      }
    }else if(this.state.board[y][x].pieceType==="Pawn"){
      if(this.state.board[y][x].isBlackPiece){
        return BlackPawn;
      }
      else {
        return WhitePawn;
      }
    }
  }

  falseBoard(){
    return [[false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false],
                      ];
  }
  tileClick(y,x){
    console.log("x: ",x," y: ",y);
    console.log("this.state.isBlackTurn:", this.state.isBlackTurn);
    console.log("this.state.board[y][x].isBlackTile:", this.state.board[y][x].isBlackPiece);
    if(this.state.isTileSelected===true){
      //console.log("board: ", this.state.board);
      //console.log("paths: ", this.state.board[this.state.clickedY][this.state.clickedX].possiblePaths);

      var isMoveValid=ruleBook(this.state, y, x);
      console.log("this.state.isBlackTurn:", this.state.isBlackTurn);
      console.log("this.state.board[y][x].isBlackTile:", this.state.board[y][x].isBlackPiece);
      if(isMoveValid !== true){
        console.log("Error: ", isMoveValid);
      }else{
        this.state.board[y][x]=this.state.board[this.state.clickedY][this.state.clickedX];
        this.state.board[this.state.clickedY][this.state.clickedX]=0;
        if(this.state.isBlackTurn){
          this.state.isBlackTurn = false;
        }else{
          this.state.isBlackTurn = true;
        }
      }

      this.state.board[y][x].possiblePaths=this.falseBoard();
      this.state.clickedY=null;
      this.state.clickedX=null;
      this.state.isTileSelected=false;
      console.log("isTileSelected: ", false);
    }else if(this.state.board[y][x]!="0" && this.state.isBlackTurn === this.state.board[y][x].isBlackPiece){//if a tile isn't selected then file in the selected positions
      //use isBlackTurn to determine if the selected tile is the correct one

      this.state.clickedY=y;
      this.state.clickedX=x;
      this.state.isTileSelected=true;
      console.log("isTileSelected: ", true);
      generatePossiblePaths(this.state,y,x);

    }else{
      console.log("the tile you selected is either not the correct piece color or isn't a piece");
    }

    this.forceUpdate();

  }


  renderRow(j){
    var row=[];

    for(let i=0;i<8;i++){
      var keyValue=j*10+i;// y in tens x in ones place
      if((i+j)%2==0){
        row.push(<div key={keyValue} id="blackTile" onClick={() => this.tileClick(j,i, keyValue)}><img src={this.findHighlightPaths(j,i)} id="img2"></img><img src={this.findpieceimage(j,i)} id="img1"></img></div>);
      }else{
        row.push(<div key={keyValue} id="whiteTile" onClick={() => this.tileClick(j,i, keyValue)}><img src={this.findHighlightPaths(j,i)} id="img2"></img><img src={this.findpieceimage(j,i)} id="img1"></img></div>);
      }

    }
    return(row);
  }

  renderTurn(){
    var row=[];
    if(this.state.isBlackTurn){
      row.push(<h4 key="black" id="displayTurn">It's Black's Turn</h4>);
    }else{
      row.push(<h4 key="white" id="displayTurn">It's White's Turn</h4>);
    }
    return(row);
  }

  render(){
    return(
      <div>

        <GameNav  key="gameNavContainer" filldefaultboard={this.filldefaultboard} childVisible={this.state.childVisible}/>

        <div className="board">
          <div className="board-row">{this.renderRow(0)}</div>
          <div className="board-row">{this.renderRow(1)}</div>
          <div className="board-row">{this.renderRow(2)}</div>
          <div className="board-row">{this.renderRow(3)}</div>
          <div className="board-row">{this.renderRow(4)}</div>
          <div className="board-row">{this.renderRow(5)}</div>
          <div className="board-row">{this.renderRow(6)}</div>
          <div className="board-row">{this.renderRow(7)}</div>
        </div>

        <div id="gameInfo">
          {this.renderTurn()}>
        </div>
      </div>
    );
  }

}


export default Chessboard;
