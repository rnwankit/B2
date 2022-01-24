import React, { useEffect, useState } from 'react';
import Button from '../Components/Common/Button/Button'

function Counter(props) {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false)

    const handleIncrement = () => {
        console.log("handleIncrement")
        setCount(count+1);
    }

    const handleDecrement = () => {
        console.log("handleDecrement")
        if (count !== 0) {
            setCount(count-1);
        }
    }

    useEffect(
        () => {
            if (count === 0) {
                setDisable(true)
            } else {
                setDisable(false)
            }
            console.log("componentDidUpdate/Mount");
        },
    [count])

    console.log("render");

    return (
        <div>
            <Button onClick={() => handleIncrement()}>
                +
            </Button>
            
            <label>{count}</label>

            <Button disabled={disable} onClick={() => handleDecrement()}>
                -
            </Button>
            
        </div>
    );
}

export default Counter;