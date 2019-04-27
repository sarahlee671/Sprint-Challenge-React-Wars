import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
        <div className="card">
            <div className ="character-info">
                <h2 className="name">{props.character.name}</h2>
                <p>
                    <strong>Birth year: </strong> {props.character.birth_year}
                </p>
                <p>
                    <strong>Gender: </strong> {props.character.gender}
                </p>
                <p>
                    <strong>Height: </strong> {props.character.height}
                </p>
                <p>
                    <strong>Mass : </strong> {props.character.mass}
                </p>
                <p>
                    <strong>Hair color: </strong> {props.character.hair_color}
                </p>
            </div>
        </div>
    )
}

export default Character;