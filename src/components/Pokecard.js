import React from 'react';

function Pokecard(props) {
    return (
        <div className='col mb-4'>
            <div className='card' style={{maxWidth: "300px"}, {minWidth: "200px"}}>
                <div className='card-header'>{props.name}</div>
                <div className='card-body'>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className='card-footer'>
                    <ul>
                        <li>Type: {props.type}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pokecard;