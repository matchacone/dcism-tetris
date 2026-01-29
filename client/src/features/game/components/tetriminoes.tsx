import type { CellValue } from "./board";

// Define the shape of a single Tetromino object
export type TetrominoShape = {
  shape: number[][];
  color: string; // Tailwind color class for preview components
  type: CellValue;
};

export const TETROMINOS: Record<string, TetrominoShape> = {
  0: { shape: [[0]], color: "bg-gray-900", type: 0 }, // Empty placeholder
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    color: "bg-cyan-400",
    type: 1,
  },
  J: {
    shape: [
      [0, 2, 0],
      [0, 2, 0],
      [2, 2, 0],
    ],
    color: "bg-blue-600",
    type: 2,
  },
  L: {
    shape: [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ],
    color: "bg-orange-400",
    type: 3,
  },
  O: {
    shape: [
      [4, 4],
      [4, 4],
    ],
    color: "bg-yellow-400",
    type: 4,
  },
  S: {
    shape: [
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0],
    ],
    color: "bg-green-500",
    type: 5,
  },
  T: {
    shape: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0],
    ],
    color: "bg-purple-500",
    type: 6,
  },
  Z: {
    shape: [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ],
    color: "bg-red-500",
    type: 7,
  },
};

// Helper to get a random piece (Basic Version)
export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};