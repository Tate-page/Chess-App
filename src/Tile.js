import React from 'react';
import Piece from './Piece.js';

class Tile extends React.Component{
  constructor(x,y,Piece){
    this.x=x;
    this.y=y;
    this.Piece=Piece;
  }

  render(){
    return(
        <div></div>
    );

  }


}

export default Tile
