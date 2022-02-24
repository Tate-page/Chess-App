import React from 'react';
import './Display.css'
import Chessboard from './Chessboard.js'
function getGameScreenHeight(){
  var element = document.getElementId("gameScreenCenter");
  element.style.width=element.style.height;
}

class Display extends React.Component{

  render(){
    return(
      <div className="gameScreenBackground">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <div id="gameScreenLeft"></div>
        <Chessboard id="gameScreenCenter" />
        <div id="gameScreenRight"></div>

      </div>
    );

  }
}
export default Display;
