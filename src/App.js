import { useState, useEffect } from "react";
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";
import "./styles.css";

export default function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({
    winner: "none",
    state: "none"
  });
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished!! Player won: ${result.winner} `);
      restart();
    }
  }, [result]);
  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one", state: "tie" });
    }
  };
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      console.log(firstPlayer);
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };
  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            chooseValue={() => {
              chooseSquare(0);
            }}
          />
          <Square
            value={board[1]}
            chooseValue={() => {
              chooseSquare(1);
            }}
          />
          <Square
            value={board[2]}
            chooseValue={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[3]}
            chooseValue={() => {
              chooseSquare(3);
            }}
          />
          <Square
            value={board[4]}
            chooseValue={() => {
              chooseSquare(4);
            }}
          />
          <Square
            value={board[5]}
            chooseValue={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[6]}
            chooseValue={() => {
              chooseSquare(6);
            }}
          />
          <Square
            value={board[7]}
            chooseValue={() => {
              chooseSquare(7);
            }}
          />
          <Square
            value={board[8]}
            chooseValue={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
