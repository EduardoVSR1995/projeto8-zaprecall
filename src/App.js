import React from 'react';
import PrimaryDisplay from "./PrimaryDisplay";
import SecondDisplay from './SecondDisplay';
import decks from './decks';


export default function App(){
    
    function ChangeDysplai(){
        if (change === false) {
            const sort = decks.sort(()=> Math.random() - 0.5);
            const deck = sort[0].deck;
            deck.sort(()=> Math.random() - 0.5);
            return(
                <SecondDisplay deck={deck}/>
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