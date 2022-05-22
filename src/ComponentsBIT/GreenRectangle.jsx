import {useState} from "react";

function GreenRectangle(){

    const medziai = ["azuolas", "berzas", "uosis"];

    const [display, setdisplay] = useState('none');

    const clickAzuolas = ()=>{
        setdisplay('flex');
        document.getElementById('txt').innerText = medziai[0];
    }
    const clickBerzas = ()=>{
        setdisplay('flex');
        document.getElementById('txt').innerText = medziai[1];
    }
    const clickUosis = ()=>{
        setdisplay('flex');
        document.getElementById('txt').innerText = medziai[2];
    }
    return(
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                flexWrap: "wrap",
                width: 450 +'px',
                height: 300 + 'px',
                backgroundColor:'green'
            }
        }>
            <div id={"txt"} style={
                {
                    display: display,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 400 +'px',
                    height: 200 +'px',
                    backgroundColor: 'yellow',
                    color: 'black'
                }
            }></div>
            <div style={
                {
                    width: 33 + '%'
                }
            }><button onClick={clickAzuolas}>{medziai[0]}</button></div>
            <div style={
                {
                    width: 33 + '%'
                }
            }><button onClick={clickBerzas}>{medziai[1]}</button></div>
            <div style={
                {
                    width: 33 + '%'
                }
            }><button onClick={clickUosis}>{medziai[2]}</button></div>
        </div>
    )
}
export default GreenRectangle;