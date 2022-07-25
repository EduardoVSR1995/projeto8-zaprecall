import React from 'react';
import ChangeDysplai from '../ChangeDysplai/ChangeDysplai';
import '../css/reset.css';

export default function App(value){
    const [change, setChange] = React.useState(value);
    return(
        <ChangeDysplai change={change} setChange={setChange} />
    );
}