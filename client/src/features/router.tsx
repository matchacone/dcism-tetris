import { Routes, Route } from 'react-router-dom'
import TetrisBoard from './game/components/board'
export default function AppRouter(){
    return(
        <>
        <Routes>
            <Route
                path="/"
                element={ 
                    <TetrisBoard /> 
                }
                />
        </Routes>
        </>
    )
}