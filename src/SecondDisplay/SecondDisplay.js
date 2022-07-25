import React from 'react';
import Questions from '../Questions/Questions';
import Mesage from '../Mesage/Mesage';
import Reinitialize from '../Reinitialize/Reinitialize';
import logo from '../image/logo.png';
import ZapRecall from "../image/ZapRecall.png";
import x from '../image/xzinho.png';
import int from '../image/zinho.png';
import v from '../image/vzinho.png';
import '../SecondDisplay/Second.css';


export default function SecondDisplay({deck, setChange }) {
    const [cont, setCont] = React.useState({plays:0,hits:0, mediuns:0, erros:0, img:[]});    
    function conte(value){
        if(value==="hits"){
            setCont({...cont, hits: cont.hits+1, plays: cont.plays+1,img:[cont.img , <img src={v}/>]}); 
        }
        if(value==="mediuns"){
            setCont({...cont, mediuns: cont.mediuns+1, plays: cont.plays+1, img:[cont.img , <img src={int}/>] }); 
        }
        if(value==="erros"){
            setCont({...cont, erros: cont.erros+1, plays: cont.plays+1, img:[cont.img , <img src={x}/>] }); 
        }
    }
    return(
        <div className="display-secondary">
            <div className="img">
                <img src={logo}/>
                <div className="logo-name"> 
                    <img src={ZapRecall}/>
                </div>
            </div>
            <Questions deck={deck} setCont={setCont} conte={conte} /> 
            <div className='score-bar'>
                <div className='congratulations'>
                <Mesage deck={deck} cont={cont}/>        
                </div>
                {cont.plays} / {deck.length} CONCLUÍDOS
                <div className='icons'>
                {cont.img}
                </div>  
                <div className="botton">
                    <Reinitialize plays={cont.plays} deck={deck} setChange={setChange}/>
                </div>
            </div>
        </div>

);

}