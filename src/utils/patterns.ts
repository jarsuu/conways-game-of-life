export const generateJPattern = (rows: number, cols: number): number[] => {
  const pattern = Array(rows * cols).fill(0);
  const centreX = Math.floor(cols / 2);
  const centreY = Math.floor(rows / 2);

  const jCoordinates = [
    [centreX - 1, centreY],
    [centreX - 1, centreY + 1],
    [centreX, centreY + 1],
    [centreX + 1, centreY - 1],
    [centreX + 1, centreY],
    [centreX + 1, centreY + 1],
  ];

  jCoordinates.forEach(([row, col]) => {
    const index = row * cols + col;
    if (index >= 0 && index < pattern.length) {
      pattern[index] = 1;
    }
  });

  return pattern;
};
