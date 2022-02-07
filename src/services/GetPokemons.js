import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPokemons from './DisplayPokemons';

function GetPokemons() {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            console.log(res.data.results);
            setPokemons(res.data.results);
        })
    };

    useEffect(() => {
        getPokemons();
    }, [])

    function displayPokemons() {
        console.log(pokemons);
    }

    return (
        <div className='row'>
            {pokemons.map((item, index) => (
                <DisplayPokemons key={index} name={item.name} url={item.url}/>
            ))}
            <button onClick={displayPokemons}>Display pokemons</button>
        </div>
    );
}

export default GetPokemons;