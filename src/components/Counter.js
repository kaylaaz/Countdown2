import { useState } from 'react';

export default function Counter(props) {
    const [value, setValue] = useState(0);
    return (
        <>
            <h2>{props.color}</h2>
            <h3>{props.name}</h3>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        </>
    );
}