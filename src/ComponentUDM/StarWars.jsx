import React from "react";

class FilmItemRow extends React.Component {
    render() {
        return(
            <li>
                <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}

class StarWars extends React.Component{

    constructor() {
        super()
        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            films: [],
        }
    }

    getNewCharacter(){
        const randomNumber = Math.round(Math.random() * 82);
        console.log('get new character from a button');
        const url = `https://swapi.dev/api/people/${randomNumber}/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        name: data.name,
                        height: data.height,
                        homeworld: data.homeworld,
                        films: data.films,
                        loadedCharacter: true,
                    })
            })
    }

    render() {
        const movies = this.state.films.map((film,i)=>{return <FilmItemRow key = {i} url = {film}/>});
        return (

            <>
                {
                    this.state.loadedCharacter &&
                    <div>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.height} cm</p>
                        <p><a href={this.state.homeworld}>Homeworld:</a></p>
                    <ul>
                        {movies}
                    </ul>

                    </div>
                }
                <h1>This is Star WARS</h1>
                <div>
                    <button
                        type={"button"}
                        onClick={()=>this.getNewCharacter()}
                        className={"btn"}
                    >Randomize character</button>
                </div>
            </>
        )
    }
}
export default StarWars;