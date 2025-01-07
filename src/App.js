import './App.css';
import { TicTacToe } from './components/tic-tac-toe-2/TicTacToe';
import { Board } from './components/tik-tac-toe-1/Board';

function App() {
  
  return (
    <div className="game">
      <div className="game-board">
        {/* <Board /> */}
        <TicTacToe/>
      </div>
    </div>
  );
}

export default App;
