import '../Reinitialize/Reinitialize.css'

export default function Reinitialize({deck ,plays , setChange}){
    if(plays===deck.length){
        return(
            <button onClick={() => setChange(true) }>
                REINICIAR RECALL
            </button>
        )
    }

}