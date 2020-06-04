import React from 'react';

const userOutput = props => {
    return (
        <div>
            <p>The logged in Username is: <b>{props.name}</b> </p>
            <p><b>{props.name}</b> is a nice guy</p>
        </div>
    );
}

export default userOutput;