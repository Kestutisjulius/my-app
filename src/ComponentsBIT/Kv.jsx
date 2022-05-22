import {useState} from 'react';

function Kv(){

    const [nr, setNr] = useState(0);
    const add = ()=> {
        setNr(n=>n+1);
    }
    return(
        <div className={"kvadratas"}>
            <div >{nr}</div>
            <button onClick={add}>+</button>
        </div>
    )
}
export default Kv;