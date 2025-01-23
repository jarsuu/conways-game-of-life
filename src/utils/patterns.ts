export const generateJPattern = (rows: number, cols: number): number[] => {
  const pattern: number[] = Array(rows * cols).fill(0) as number[];
  const centreX: number = Math.floor(cols / 2);
  const centreY: number = Math.floor(rows / 2);

  const jCoordinates: [number, number][] = [
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
