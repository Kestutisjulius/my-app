function Hello({spalva}){
        const s = 2;
    return(

        <h1 style={
            {
                backgroundColor: 'skyblue',
                padding: 20 + s +'px',
                color: spalva
            }
        }>Hello</h1>
    )
}
export default Hello;