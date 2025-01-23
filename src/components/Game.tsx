import { useState } from "react";
import Grid from "./Grid";
import { generateJPattern } from "../utils/patterns";
import Toolbar from "./Toolbar";
import { pauseGame, playGame, resetGame, stepBackward, stepForward } from "../utils/gameFunctions";

const Game = () => {
  const rows = 25;
  const cols = 25;
  const cellSize = 25;
  const initialPattern = generateJPattern(rows, cols);

  const [gridData, setGridData] = useState<number[]>(initialPattern);
  const [history, setHistory] = useState<number[][]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggleCell = (row: number, col: number) => {
    const index = row * cols + col;
    setGridData((prevGridData) => {
      const newGridData = [...prevGridData];
      newGridData[index] = newGridData[index] === 1 ? 0 : 1;
      return newGridData;
    });
  };

  return (
    <div className="flex items-center justify-around flex-col space-y-6 m-12">
      <div className="space-y-2 text-center">
        <h1 className='font-bold text-3xl'>Conway&apos;s Game of Life</h1>
        <p>Click on the squares to toggle</p>
      </div>

      <div>
        <Grid rows={rows} cols={cols} cellSize={cellSize} gridData={gridData} toggleCell={toggleCell} />
      </div>

      <div>
        <Toolbar onPlay={() => playGame(setGridData, rows, cols, setHistory, setIsPlaying)} onPause={() => {pauseGame(setIsPlaying)}} onStepForward={() => {stepForward(setGridData, rows, cols, setHistory)}} onStepBackward={() => {stepBackward(setGridData, setHistory, history)}} onReset={() => resetGame(setGridData, setHistory, history)} isPlaying={isPlaying}/>
      </div>
    </div>
  )
}

export default Game