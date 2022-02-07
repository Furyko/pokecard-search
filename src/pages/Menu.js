import React from 'react';
import Pokecard from '../components/Pokecard'
import PageTitle from '../components/PageTitle';
import GetPokemons from '../services/GetPokemons';

function Menu() {
    return (
        <div>
            <PageTitle title='Pokecard' />
            <div className='container mt-5 mb-5'>
                <GetPokemons/>
            </div>
        </div>
    );
}

export default Menu;