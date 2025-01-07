

// ### 6. **handleCellClick Function**:

//   const handleCellClick = (num) => {
//     if (winner || cells[num] !== "") return;
//     let arr = [...cells];
//     arr[num] = turn;
//     setTurn(turn === "X" ? "O" : "X");
//     checkWinner(arr);
//     setCells(arr);
//     if (!arr.includes("") && !winner) {
//       setDraw(true);
//     }
//   };

// - This function is triggered when a cell is clicked.
// - It prevents further actions if the game is already won or the cell is already filled.
// - It updates the board with the current player's symbol, switches the turn, and checks for a winner or a draw.

// ### 7. **useEffect for Winner**:

//   useEffect(() => {
//     if (winner) {
//       if (winner === "X") {
//         setScores((prev) => ({ ...prev, xScore: prev.xScore + 1 }));
//       } else if (winner === "O") {
//         setScores((prev) => ({...prev, oScore: prev.oScore + 1}));
//       }
//     }
//   }, [winner]);

// - This `useEffect` updates the score when a winner is found.

// ### 8. **Cell Component**:

//   const Cell = ({ num }) => {
//     const cellsValue = cells[num];
//     const cellsName = cellsValue ? `cell cell-${cellsValue}` : "cell";
//     return (
//       <button className={cellsName} onClick={() => handleCellClick(num)}>
//         {cellsValue}
//       </button>
//     );
//   };

// - The `Cell` component renders individual cells for the Tic-Tac-Toe board.
// - Each cell uses the `handleCellClick` function to handle the click event.

// ### 9. **handleResetBtn Function**:

//   const handleResetBtn = () => {
//     setWinner();
//     setDraw(false);
//     setCells(Array(9).fill(""));
//   };

// - This function resets the game state when the reset button is clicked.

// ### 10. **JSX Structure**:

//   return (
//     <div className="container">
//       <h1 style={{color:"white", textShadow:"2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000"}}>Tic Tac Toe</h1>
//       <div className="scoreBoard">
//         ...
//       </div>
//       <div className={`winner ${winner || draw ? "show" : ""}`}>
//         {winner ? `Winner is: ${winner}` : draw ? "It's a Draw" : ""}
//       </div>
//       <div className="grid-container">
//         ...
//       </div>
//       <button className="reset-button" onClick={handleResetBtn}>Reset Game</button>
//     </div>
//   );

// - This structure contains the layout for the game, including:
//   - Title, scoreboard, game grid (using the `Cell` components), winner/draw message, and reset button.

// ### Summary:
// - The game handles turn-based logic, win/draw detection, and keeps track of player scores.
// - `useEffect` is used to update the score when a winner is found.
// - The component includes a grid layout and button-based cell interaction, with reset functionality to restart the game.