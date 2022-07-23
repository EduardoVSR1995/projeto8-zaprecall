
import PrimaryDisplay from "./PrimaryDisplay";
import SecondDisplay from './SecondDisplay';
import decks from './decks';

export default function ChangeDysplai({change, setChange}){
    if (change === false) {
        const sort = decks.sort(()=> Math.random() - 0.5);
        const deck = sort[0].deck;
        deck.sort(()=> Math.random() - 0.5);
        return(
            <SecondDisplay deck={deck} setChange={setChange} />
        );
    }
    else{
    return(
    <>
        <PrimaryDisplay />
        <div onClick={() => setChange(false)} className="botton-initial">
           Iniciar Recall!
        </div>
    </>
    )}
}