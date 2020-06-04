import React from 'react';

const validationComponents = props => {

    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Input too short';
    }
    return (
        <div>
            {
                <p>{validationMessage}</p>
            }
        </div>

    )
}

export default validationComponents;