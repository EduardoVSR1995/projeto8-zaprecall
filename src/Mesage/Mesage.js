import sad from '../image/sad.png'
import hap from '../image/party.png'

export default function Mesage({deck , cont}){
    if(cont.hits+cont.mediuns === deck.length){
        return(
            <div className='finish-coment'>
            <p><img src={hap}/>Parabéns!</p><br/>
            Você não esqueceu de <br/> nenhum flashcard!<br/><br/>
            </div> 
        );
    }
    if(cont.erros != 0  && cont.plays === deck.length){
        return(
            <div className='finish-coment'>
            <p><img src={sad}/>Putz...</p><br/>
            Ainda faltam alguns...<br/>
            Mas não desanime!<br/><br/>
            </div>
        
        )
    }
}