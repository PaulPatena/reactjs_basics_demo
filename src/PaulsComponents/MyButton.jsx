import React from 'react';

const my_button = (props) => {
    const local_style = {
        backgroundColor: "White",
        border: "2px solid blue",
        marginTop: "15px",
        cursor: "pointer",
        boxShadow: "2px 2px 2px",
    };

    return (
        <div>
            <button style={local_style} onClick={props.click}>{props.label}</button>
        </div>
    );
};

export default my_button;