import React, { useState } from 'react';
import { Input } from '@material-ui/core';

const SimpleInput = (props) => {
    const [inputVal, setInputVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.returnVal(inputVal);
    }

    return (
        <div className="gridItem">
            <form onSubmit={handleSubmit}>
                <Input 
                    value={inputVal}
                    onChange={event => setInputVal(event.target.value)}
                    onBlur={handleSubmit}
                    placeholder={"Ingredient " + props.num}
                />
            </form>
        </div>
    );
};

export default SimpleInput;