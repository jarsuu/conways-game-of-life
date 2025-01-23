import React from "react";
import { updateGrid } from "./gameLogic";

let gameInterval: number | null = null;

export const playGame = (
  setGridData: React.Dispatch<React.SetStateAction<number[]>>,
  rows: number,
  cols: number,
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  interval = 250
) => {
  if (gameInterval !== null) return;

  setIsPlaying(true);

  gameInterval = setInterval(() => {
    setGridData((prevGridData) => {
      setHistory((prevHistory) => [...prevHistory, prevGridData]);

      return updateGrid(prevGridData, rows, cols)
    });
  }, interval);
};

export const pauseGame = (
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setIsPlaying(false);

  if (gameInterval !== null) {
    clearInterval(gameInterval);
    gameInterval = null;
  };
};

export const stepForward = (
  setGridData: React.Dispatch<React.SetStateAction<number[]>>,
  rows: number,
  cols: number,
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  setGridData((prevGridData) => {
    setHistory((prevHistory) => [...prevHistory, prevGridData]);

    return updateGrid(prevGridData, rows, cols);
  });
};

export const stepBackward = (
  setGridData: React.Dispatch<React.SetStateAction<number[]>>,
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>,
  history: number[][]
) => {
  if (history.length > 0) {
    const prevHistory = [...history];
    const lastGridState = prevHistory.pop();
    setGridData(lastGridState ?? []);
    setHistory(prevHistory);
  }
};

export const resetGame = (
  setGridData: React.Dispatch<React.SetStateAction<number[]>>,
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>,
  history: number[][],
) => {
  if (history.length > 0) {
    setGridData(history[0]);
    setHistory([]);
  }
};