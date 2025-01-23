import React from 'react'

interface GridProps {
  rows: number;
  cols: number;
  cellSize: number;
  gridData: number[],
  toggleCell: (row: number, col: number) => void,
}

const Grid: React.FC<GridProps> = ({ rows, cols, cellSize, gridData, toggleCell }) => {  
  return (
    <div className={`grid`} style={{
      width: "100%",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
      gridTemplateRows: `repeat(${rows}, ${cellSize}px)`
    }}>
      {gridData.map((cell, idx) => (
        <div
          key={idx}
          className={`cursor-pointer border border-neutral-400 ${cell === 1 ? "bg-black" : "bg-neutral-100"}`}
          style={{
            width: `${cellSize}px`,
            height: `${cellSize}px`
          }}
          onClick={() => {toggleCell(Math.floor(idx / cols), idx % cols)}}>
        </div>
      ))}
    </div>
  )
}

export default Grid