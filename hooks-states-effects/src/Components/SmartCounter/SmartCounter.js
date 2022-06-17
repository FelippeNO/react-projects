import { useState } from 'react';

//Counter with hook.
function SmartCounter() {
    const [quantity, increase] = useState(1);

    return (
        <>
            <h1 id='counter-box'>{quantity}</h1>
            <button onClick={() => increase(quantity + 1)}>Aumentar SmartCounter</button>
        </>
    )
}

export default SmartCounter;