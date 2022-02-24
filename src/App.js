import logo from './logo.svg';
import './App.css';
import Display from './Display.js'

function App() {
  return (
    <div id="everythingExceptTheBackground">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <header>
        <div className="header">
          <div id="logo">
            <img alt=" a +,-,*,/ symbol arranged in a square of assorted colors" id="header-img" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png"></img>
          </div>
          <div id="signUpLinks">
            <a href="#">Sign Up Here!</a>
            <p>or</p>
            <a href="#">Sign In</a>
          </div>
        </div>
      </header>
      <Display />
    </div>
  );
}

export default App;
