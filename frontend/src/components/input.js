import React, { useState } from 'react';

const Input = (props) => {
    const [inputVal, setInputVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.returnVal(inputVal);
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input 
                    value={inputVal}
                    onChange={event => setInputVal(event.target.value)}
                    onBlur={handleSubmit}
                    placeholder={"Ingredient " + props.num}
                />
            </form>
        </div>
    );
};

export default Input;