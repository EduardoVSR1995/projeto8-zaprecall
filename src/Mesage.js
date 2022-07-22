export default function Mesage({deck , cont}){
    if(cont.hits+cont.mediuns === deck.length){
        return(
            <div className='finish-coment'>
            <p><img src='./image/party.png'/>Parabéns!</p><br/>
            Você não esqueceu de <br/> nenhum flashcard!<br/><br/>
            </div> 
        );
    }
    if(cont.erros != 0  && cont.plays === deck.length){
        return(
            <div className='finish-coment'>
            <p><img src='./image/sad.png'/>Putz...</p><br/>
            Ainda faltam alguns...<br/>
            Mas não desanime!<br/><br/>
            </div>
        
        )
    }
}