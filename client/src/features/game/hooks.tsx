import { useState, useCallback, use } from "react";
import { randomTetromino,TETROMINOS } from "./components/tetriminoes";
import type { TetrominoShape } from "./components/tetriminoes";

type PlayerState = {
    pos: { x: number, y: number } // coords
    tetromino: number[][] // shape of the tetromino lalala
    collided: boolean
};

export const usePlayer = () => {
    //initial state
    const [player,setPlayer] = useState<PlayerState>({
        pos: { x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false
    });

    const updatePlayerPos = ({x,y,collided}: {x: number, y: number, collided: boolean}) => {
        setPlayer((prev) => ({
            ...prev,
            pos: {x,y},
            collided
        }));;
    };
}


