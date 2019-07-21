import React from 'react';
const Validation = (props) => {
    let textMsg = 'Text long enough';
    if(props.textLen <= 5){
        textMsg = 'Text too short';
    }
    return (
        <div>
            <p>{textMsg}</p>
        </div>
    );
};

export default Validation;