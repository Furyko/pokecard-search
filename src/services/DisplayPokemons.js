import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pokecard from '../components/Pokecard';

function DisplayPokemons(props) {
    const [pokemon, setPokemon] = useState([]);

    const settingPokemon = () => {
        axios.get(props.url)
        .then(res => {
            console.log("Info de", res.data.name, res.data);
            setPokemon(res.data);
        })
    };

    useEffect(() => {
        settingPokemon();
    }, [])

    return (
        <div className='col'>
            {pokemon.length !== 0 ? 
            <Pokecard name={pokemon.name} image={pokemon.sprites.front_default} type={pokemon.types[0].type.name}/> : 
            <Pokecard name='' image=''/>}
        </div>
    )
}

export default DisplayPokemons;