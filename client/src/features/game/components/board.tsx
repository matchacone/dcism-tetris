import React from "react";
import { useState } from "react";

const rows = 20;
const cols = 10;

export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type BoardGrid = CellValue[][];
const createBoard = (): BoardGrid => 
Array.from({ length: rows }, () => Array(cols).fill(0));


// colors for pieces and board
const COLOR_MAP: Record<number, string> = {
  0: "bg-gray-900",   // Empty cell
  1: "bg-cyan-400",   // I
  2: "bg-blue-600",   // J
  3: "bg-orange-400", // L
  4: "bg-yellow-400", // O
  5: "bg-green-500",  // S
  6: "bg-purple-500", // T
  7: "bg-red-500",    // Z
};

export default function TetrisBoard(){
    const [grid,setGrid] = useState<CellValue[][]>(() => createBoard());


    return(
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-950">
                <div className="grid grid-cols-10 gap-[1px] bg-gray-800 border-4 border-gray-700 p-1">
                    {grid.map((row, rowIndex) => 
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                // Tailwind classes for the cells
                                className={`
                                    w-6 h-6 sm:w-8 sm:h-8
                                    ${COLOR_MAP[cell]}
                                    border border-white/5
                                `}
                                />
                        ))
                    )}
                </div>


            </div>
        </>
    )
}