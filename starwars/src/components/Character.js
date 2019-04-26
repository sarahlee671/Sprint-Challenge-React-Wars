import React from 'react';

function Character(props) {
    return (
        <div className="card">
            <div className ="character-info">
                <h1>{props.character.name}</h1>
            </div>
        </div>
    )
}

export default Character;