import React from 'react';
import './GameNav.css';

class GameNav extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    if(this.props.childVisible){
      return(
        <div id="gameNav">
          <h1>Game Menu</h1>
          <div className="btnPanel">
            <button onClick={() => {this.props.filldefaultboard("HotSeat")}} value="hotSeat">Hot Seat</button>
          </div>
        </div>
      );
    }else{

      return(null);
    }
  }
}
export default GameNav;
