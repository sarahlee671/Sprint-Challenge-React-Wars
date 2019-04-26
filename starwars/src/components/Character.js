import React from 'react';

function Character(props) {
    return (
        <div className="card">
            <div className ="character-info">
                <h1>{props.character.name}</h1>
                <p>
                    <strong>Birth year: </strong> {props.character.birth_year}
                </p>
                <p>
                    <strong>Homeworld: </strong> <a href={props.character.homeworld}> See Here </a>
                </p>
                <p>
                    <strong>Gender: </strong> {props.character.gender}
                </p>
                <p>
                    <strong>Height: </strong> {props.character.height}
                </p>
            </div>
        </div>
    )
}

export default Character;