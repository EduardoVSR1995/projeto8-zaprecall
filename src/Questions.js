import decks from './decks';
import EveryQuestion from './EveryQuestion';

export default function Questions() {
    const deck = decks[0].deck;
    console.log(deck.sort(()=> Math.random() - 0.5));
    return(
        <div className='every-questions'>
            {deck.map((decke, index)=> <EveryQuestion key={index} number={index+1} deck={decke}/> )}
        </div>
    )
}