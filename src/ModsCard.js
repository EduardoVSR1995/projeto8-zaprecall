import React from 'react';

export default function ModsCard({stateAnswer, number, questions, answers, setPlay, play ,conte}) {
    const [color, setColor] = React.useState("");
    if (stateAnswer === 'numberQuestion') {
        return(
            <div onClick={()=> setPlay({...play, stateAnswer:'question'})} className='question'>
                <div>Pergunta {number}</div> 
                <img src='./image/Vector.png'/>
            </div>
        )
    }
    else if(stateAnswer==='question'){
        return(
            <>
                <div className="question-description">
                    {questions} 
                </div>
                <img onClick={()=> setPlay({...play, stateAnswer:'correctAnswer'})} className='little-arrow' src='./image/setinha.png'/>
            </>
        );
    }
    else if(stateAnswer==='correctAnswer'){
        function addPlay(value){
            setColor(value);
            setPlay({...play, stateAnswer:'initial'});
        }
        return(
        <div className="question-description">
            {answers}
            <div className='allbottons'> 
                <div onClick={()=> {addPlay("red");conte("erros")}}  className="bottom red"> Não <br/> lembrei</div>
                <div onClick={()=> {addPlay("yellow");conte("mediuns");}} className="bottom yellow">Quase não <br/> lembrei</div>
                <div onClick={()=> {addPlay("green");conte("hits");}} className="bottom green">Zap!</div>
            </div>
        </div>);
    }
    else if(stateAnswer==='initial'){
        if(color==="red"){
        return(
        <div className='question'>
                <s className={color} >Pergunta {number}</s> <img src='./image/xzinho.png'/>
        </div>
        );
        }
        else if(color==="green"){  
                    return(
        <div className='question'>
                <s className={color} >Pergunta {number}</s> <img src='./image/vzinho.png'/>
        </div> 
        )

    }
    else if(color==="yellow"){
        return(
        <div className='question'>
                <s className={color} >Pergunta {number}</s> <img src='./image/zinho.png'/>
        </div> 
        )
        }
    }
}