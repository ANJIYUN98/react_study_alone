import { useState } from "react";
import "./App.css"
import Board from "./Components/Board";

function App() {
  const [history, setHistory] = useState([{squares : Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  
  }

  const current = history[history.length - 1]; //history 안의 squares는 1,2,3.. 으로 되는데 인덱스는 0,1,2... 이므로 history.length - 1 임
  const winner = calculateWinner(current.squares);

  let status;
  if(winner) {
    // 승자가 있으면
    status = 'Winner : ' + winner;
  }else {
    // 승자가 없으면
    status = `Next player : ${xIsNext ? 'X' : 'O'}`;;
  }

  const handleClick = (i) => {
    const newSquares = current.squares.slice(); //slice()하는 이유는 원본을 바로 수정하는 것이 아니라 복사본을 만들어서 수정한 다음 넣어주기 위해 사용
    console.log('newSquares', newSquares);
    console.log('newSquares[i] : ', newSquares[i]);
    
    //리턴값이 있거나 이미 클릭이 되어있다면
    if (calculateWinner(newSquares) || newSquares[i]) { 
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, {squares: newSquares}] ); //...은 전개 연산자, history에 newSquares를 push한다.
    setXIsNext(prev => !prev);
  }

  const moves = history.map((step, move) => {
    const desc = move?
      'Go to move #' + move :
      'Go to Game start';    //인덱스가 0일 때 (0은 false니까)
    return (
      <li key={move}>
        <button>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol>{moves}</ol> 
      </div>
      
    </div>
  );
}

export default App;
