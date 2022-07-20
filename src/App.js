import React from 'react';
import PrimaryDisplay from "./PrimaryDisplay";
import SecondDisplay from './SecondDisplay';

export default function App(){
    
    function ChangeDysplai(){
        if (change === false) {
            return(
                <SecondDisplay />
            );
        }

        return(
        <>
            <PrimaryDisplay />
            <div onClick={() => setChange(!change)} className="botton-initial">
               Iniciar Recall!
            </div>
        </>
        )
    }
    
    const [change, setChange] = React.useState(true);

    return(
        <ChangeDysplai/>
    );
}