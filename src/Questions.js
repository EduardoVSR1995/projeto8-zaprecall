import EveryQuestion from './EveryQuestion';
import React from 'react';
export default function Questions({deck, setCont, conte}) {
    return(
        <div className='every-questions'>
            {deck.map((decke, index)=> <EveryQuestion key={index} number={index+1} questions={decke.question} answers={decke.answer} deck={deck} setCont={setCont} conte={conte}/> )}
        </div>
    )
}