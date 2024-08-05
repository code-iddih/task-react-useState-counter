import { useState } from "react";



function Counter() {

    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (

        <div>
            <p className="counter">{count}</p>
            <button className="counter-btn" id="minus" onClick={decreament}>Decreament</button>
            <button className="counter-btn" id="reset" onClick={reset}>Reset</button>
            <button className="counter-btn" id="add" onClick={increament}>Increament</button>
        </div>

    );

}

export default Counter;