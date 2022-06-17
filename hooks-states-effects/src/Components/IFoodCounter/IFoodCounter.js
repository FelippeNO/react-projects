import React, { useState, useEffect } from 'react'
import '../IFoodCounter/IFoodCounter.css'

export default function IFoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")


    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.30 * value;
    }, [value])

    function decrease() {

        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive");
        }

        if (value > 0) {
            setValue(value - 1)
        }

    }

    function increase() {
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active")
    }


    return (
        <div className='countexWrapper'>

            <button className={buttonStyle}
                onClick={decrease}>
                -
            </button>

            <p>
                {value}
            </p>

            <button className='counter-button-plus-active'
                onClick={increase}>
                +
            </button>

            <button id="moeda">12,00</button>

        </div>
    )
}
