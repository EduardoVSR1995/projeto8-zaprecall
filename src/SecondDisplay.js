import Questions from './Questions';

export default function SecondDisplay() {
    return(
        <div className="display-secondary">
            <div className="img">
                <img src="./image/logo.png"/>
                <div className="logo-name"> 
                    <img src="./image/ZapRecall.png"/>
                </div>
            </div>
            <Questions />
            <div className='score-bar'>
                
            </div>
        </div>
    );

}