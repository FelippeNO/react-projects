
//Counter without hook.
function Counter() {
    let quantity = 10;

    function increase() {
        quantity = quantity + 1;
        document.getElementById('counter-box').innerHTML = quantity;
    }

    return (
        <>
            <h1 id='counter-box'>{quantity}</h1>
            <button onClick={increase}>Aumentar</button>
        </>
    )
}

export default Counter;