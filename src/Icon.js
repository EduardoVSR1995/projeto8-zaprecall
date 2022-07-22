export default function Incon({hits,mediuns,erros}){
    const arrey = [];
    for (let i = 0; i < hits; i++) {
           arrey.push(<img src='./image/vzinho.png'/>);
    }
    for (let i = 0; i < mediuns; i++) {
        arrey.push(<img src='./image/zinho.png'/>);
    }
    for (let i = 0; i < erros; i++) {
        arrey.push(<img src='./image/xzinho.png'/>);
    }
    return(arrey);
}
