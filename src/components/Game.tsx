import { useEffect, useState } from "react";
import Grid from "./Grid";
import { generateJPattern } from "../utils/patterns";
import { updateGrid } from "../utils/gameLogic";
import Toolbar from "./Toolbar";
import { pauseGame, playGame, resetGame, stepGame } from "../utils/gameFunctions";

const Game = () => {
  const rows = 25;
  const cols = 25;
  const cellSize = 20;
  const initialPattern = generateJPattern(rows, cols);

  const [gridData, setGridData] = useState<number[]>(initialPattern);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridData((prevGridData) => updateGrid(prevGridData, rows, cols));
    }, 500);

    return () => clearInterval(interval);
  }, [rows, cols]);

  const toggleCell = (row: number, col: number) => {
    const index = row * cols + col;
    setGridData((prevGridData) => {
      const newGridData = [...prevGridData];
      newGridData[index] = newGridData[index] === 1 ? 0 : 1;
      return newGridData;
    });
  };

  return (
    <div className="flex items-center justify-around flex-col">
      <div>
        <h1>Conway's Game of Life</h1>
      </div>

      <div>
        <Grid rows={rows} cols={cols} cellSize={cellSize} gridData={gridData} toggleCell={toggleCell} />
      </div>

      <div>
        <Toolbar onPlay={playGame} onPause={pauseGame} onStep={stepGame} onReset={resetGame} />

      </div>
    </div>
  )
}

export default Game