import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
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

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    // 승자가 있으면
    status = 'Winner : ' + winner;
  }else {
    // 승자가 없으면
    status = `Next player : ${xIsNext ? 'X' : 'O'}`;;
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();
    console.log('newSquares', newSquares);
    console.log('newSquares[i] : ', newSquares[i]);
    
    //리턴값이 있거나 이미 클릭이 되어있다면
    if (calculateWinner(newSquares) || newSquares[i]) { 
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(prev => !prev);
  }

  const renderSquare = (i) => {
      return (
          <Square 
              value ={squares[i]} 
              onClick={()=> handleClick(i)}
          />
      )
  }


  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
      </div>
      <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board


