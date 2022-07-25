import React from 'react';
import logo from '../image/logo.png'
import ZapRecall from "../image/ZapRecall.png"
import '../PrimaryDisplay/Primary.css'

export default function PrimaryDisplay(){
     return(
        <div className="display-initial">
            <div className="img">
                <img src={logo}/>
            </div>
        <div className="logo-name"> 
        <img src={ZapRecall}/>
        </div>
        </div>
     )
}