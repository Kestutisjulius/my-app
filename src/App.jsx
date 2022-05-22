import React from "react";
import './App.css';
import Item from './MyItem';
import Hello from "./ComponentsBIT/Hello";
import Stebuklas from "./ComponentsBIT/Stebuklas";
import StarWars from "./ComponentUDM/StarWars";
import GreenRectangle from "./ComponentsBIT/GreenRectangle";
import Prideti from "./ComponentsBIT/Prideti";



function App() {
  return (
    <div className="App">
      <header className="App-header">
            {/*<Item name = "Gully"/>*/}
            {/*<Item name = "Kestutis"/>*/}
            {/*<Hello spalva={'red'}/>*/}
            {/*<Stebuklas/>*/}
            <StarWars/>
            {/*<GreenRectangle/>*/}
            {/*<Prideti/>*/}
      </header>
    </div>
  );
}

export default App;
