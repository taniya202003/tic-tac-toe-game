import React, { useEffect, useState } from "react";
import "../tic-tac-toe-2/ticTacToe.css";

export const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill("")); // array of 9 empty strings
  const [winner, setWinner] = useState();
  const [draw, setDraw] = useState(false);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  console.log(turn, "turn");
  console.log(cells, "cells");
  console.log(winner, "winner");
  console.log(draw, "draw");

  const checkWinner = (arr) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    //- The `combos` object contains predefined winning patterns (rows, columns, and diagonals). The `for...in` loop iterates over each key in `combos` (`across`, `down`, `diagonal`).
    for (let combo in combos) {
      // - Each combo key contains an array of winning patterns (e.g., `[0, 1, 2]`, `[3, 4, 5]`), and `forEach` is used to loop over each individual pattern (winning line).
      combos[combo].forEach((pattern) => {
        if (
          arr[pattern[0]] === "" ||
          arr[pattern[1]] === "" ||
          arr[pattern[2]] === ""
        ) {
        } else if (
          arr[pattern[0]] === arr[pattern[1]] &&
          arr[pattern[1]] === arr[pattern[2]]
        ) {
          setWinner(arr[pattern[0]]);
        }
      });
    }
  };
  // - Defines all possible winning combinations (rows, columns, and diagonals).
  // - It checks if any of these combinations have the same symbol and sets the winner if a match is found.

  const handleCellClick = (num) => {
    if (winner || cells[num] !== "") return;
    let arr = [...cells];

    if (turn === "X") {
      arr[num] = "X";
      setTurn("O");
    } else {
      arr[num] = "O";
      setTurn("X");
    }
    checkWinner(arr);
    setCells(arr);

    if (!arr.includes("") && !winner) {
      setDraw(true);
    }
  };

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setScores((prev) => ({ ...prev, xScore: prev.xScore + 1 }));
      } else if (winner === "O") {
        setScores((prev) => ({ ...prev, oScore: prev.oScore + 1 }));
      }
    }
  }, [winner]);

  const Cell = ({ num }) => {
    const cellsValue = cells[num];
    const cellsName = cellsValue ? `cell cell-${cellsValue}` : "cell";
    return (
      // <td className={cellsName} onClick={() => handleCellClick(num)}>  ---// in case of table format //---
      //   {cellsValue}
      // </td>
      <button className={cellsName} onClick={() => handleCellClick(num)}>
        {cellsValue}
      </button>
    );
  };

  const handleResetBtn = () => {
    setWinner();
    setDraw(false);
    setCells(Array(9).fill(""));
  };

  return (
    <div className="container">
      <h1
        style={{
          color: "white",
          textShadow:
            "2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000",
        }}>
        Tic Tac Toe
      </h1>
      <div className="scoreBoard">
        <div className="player-div">
          <div className="player one">Player 1: X</div>
          <div className="player two">Player 2: O</div>
        </div>
        <div className="playersScore">
          <div className="scores">Player X score: {scores.xScore}</div>
          <div className="scores">Player O score: {scores.oScore}</div>
        </div>
      </div>
      <div className={`winner ${winner || draw ? "show" : ""}`}>
        {winner ? `Winner is: ${winner}` : draw ? "It's a Draw" : ""}
      </div>
      {/* <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table> */}

      <div className="grid-container">
        <div className="grid-row">
          <Cell num={0} />
          <Cell num={1} />
          <Cell num={2} />
        </div>
        <div className="grid-row">
          <Cell num={3} />
          <Cell num={4} />
          <Cell num={5} />
        </div>
        <div className="grid-row">
          <Cell num={6} />
          <Cell num={7} />
          <Cell num={8} />
        </div>
      </div>

      <button className="reset-button" onClick={handleResetBtn}>
        Reset Game
      </button>
    </div>
  );
};
