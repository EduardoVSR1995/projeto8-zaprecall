import React from 'react';
import Questions from './Questions';
import Incon from './Icon';
import Mesage from './Mesage';



export default function SecondDisplay({deck}) {
    const [cont, setCont] = React.useState({plays:0,hits:0, mediuns:0, erros:0});
    function conte(value){
        if(value==="hits"){
            setCont({...cont, hits: cont.hits+1, plays: cont.plays+1  });    
        }
        if(value==="mediuns"){
            setCont({...cont, mediuns: cont.mediuns+1, plays: cont.plays+1 }); 
        }
        if(value==="erros"){
            setCont({...cont, erros: cont.erros+1, plays: cont.plays+1 }); 
        }
    }
    
    return(
        <div className="display-secondary">
            <div className="img">
                <img src="./image/logo.png"/>
                <div className="logo-name"> 
                    <img src="./image/ZapRecall.png"/>
                </div>
            </div>
            <Questions deck={deck} setCont={setCont} conte={conte} /> 
            <div className='score-bar'>
                <div className='congratulations'>
                <Mesage deck={deck} cont={cont}/>        
                </div>
                {cont.plays} / {deck.length} CONCLUÍDOS
                <div className='icons'>
                        <Incon hits={cont.hits} erros={cont.erros} mediuns={cont.mediuns}/>
                </div>
            </div>

        </div>
    );

}