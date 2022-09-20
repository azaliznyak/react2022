
import {useState} from "react";
import Character from "./Character";

export default function Characters() {

    let [characters, setCharacters]=useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.result)
        });

// ?jfjffj
    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}
                /> )
            }
        </div>
    )
}