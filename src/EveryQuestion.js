import React from 'react';
import ModsCard from "./ModsCard";

export default function EveryQuestion({number ,questions, answers, setCont, conte}) {
    const [play, setPlay] = React.useState({stateAnswer:"numberQuestion"});
    return(
        <div className='all-questions'>
            <ModsCard stateAnswer= {play.stateAnswer} number={number} questions={questions} answers={answers} setPlay={setPlay} play={play} setCont={setCont} conte={conte}/>
        </div>
        
        );
 
}
