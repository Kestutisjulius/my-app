import {useState} from "react";
import Kv from "./Kv";

function Prideti(){

    const [km, setKm] = useState([<Kv/>]);

    const addKv =  ()=> {
    setKm(kM=>[...kM, <Kv/>]);
    };

    return(
        <>
            <div id={'f'} className={"f"}>

                {
                    km.map((r,j)=>
                    <Kv />
                    )
                }
            </div>
                <div>
                    <button onClick={addKv}>prideti</button>
                </div>
        </>
    )
}
export default Prideti;