import {useState} from "react";
import Hello from "./Hello";

function Stebuklas(){

    const [spalva, setSpalva] = useState('blue');
    const [nr, setNr] = useState(1);

    const stebuklas = (a)=>{
        console.log('stebuklu stebuklas' + a);
        spalva === 'blue' ? setSpalva('green') : setSpalva('blue');
    }
    const kitasStebuklas = ()=>{
        console.log('stebuklu stebuklas');
    }
    const countp = ()=>{
        setNr(nr +1);
    }
    const countm = ()=>{
        setNr(nr -1);
    }


    return(
        <>
            <h1 style={
                {
                    margin: 0
                }
            }>{nr}</h1>
            <Hello spalva={spalva} />
            <button onClick={()=>stebuklas(' abra-kadabra')}>Press me WITH</button>
            <button onClick={kitasStebuklas}>Press me W/O</button>
            <div style={
                {
                    display: 'flex'
                }
            }>
                <button onClick={countp}>+</button>
                <button onClick={countm}>-</button>
            </div>
        </>
    )
}
export default Stebuklas;