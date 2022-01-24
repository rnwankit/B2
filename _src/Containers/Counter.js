import React, { useEffect, useState } from 'react';
import Button from '../Components/Common/Button/Button';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false)

    const handleIncrement = () => {
        console.log("handleIncrement")
        setDisable(false)
        setCount(count + 1) 
    }

    const handleDecrement = () => {
        console.log("handleDecrement")
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    useEffect(
        () => {
            console.log("componentDidMount")
            if (count === 0) {
                setDisable(true)
            } else {
                setDisable(false)
            }
        },
        [count])

        console.log("render");

    return (
        <div className='container'>
            <h1>Counter</h1>
            <div className='d-flex justify-content-center'>
                <Button onClick={() => handleIncrement()}>
                    +
                </Button>
                <label>{count}</label>
                <Button disabled={disable} onClick={() => handleDecrement()}>
                    -
                </Button>
            </div>
        </div>
    );
}

export default Counter;