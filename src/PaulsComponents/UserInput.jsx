import React from 'react';

const user_input = (props) => {
    return (
        <div className="Card">
            <h3>What's your name</h3>
            <p><input type="text" onChange={props.inputChanged} value={props.name}/></p>
        </div>
    );

};

export default user_input;
