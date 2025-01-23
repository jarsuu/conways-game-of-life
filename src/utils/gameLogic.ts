export const getNeighboursCount = (r: number, c: number, rows: number, cols: number, gridData: number[]): number => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;

      const nr = r + i;
      const nc = c + j;

      if ((nr >= 0 && nr < rows) && (nc >= 0 && nc <= cols) && gridData[nr * cols + nc] === 1) {
        count += 1;
      }
    }
  }

  return count;
};

export const updateGrid = (gridData: number[], rows: number, cols: number): number[] => {
  const newGridData = [...gridData];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const neighbourCount = getNeighboursCount(r, c, rows, cols, gridData);
      const currentCellIndex = r * cols + c
      const currentCellState = gridData[currentCellIndex];

      /**
       *                              GAME RULES
       * --------------------------------------------------------------------
       * For a space that is populated:
       * Each cell with one or no neighbors dies, as if by solitude.
       * Each cell with four or more neighbors dies, as if by overpopulation.
       * Each cell with two or three neighbors survives.
       * 
       * For a space that is empty or unpopulated:
       * Each cell with three neighbors becomes populated.
       */

      if (currentCellState === 1) {
        if (neighbourCount <= 1 || neighbourCount >= 4) {
          newGridData[currentCellIndex] = 0;
        }
      } else {
        if (neighbourCount === 3) {
          newGridData[currentCellIndex] = 1;
        }
      }
    }
  }

  return newGridData;
};
