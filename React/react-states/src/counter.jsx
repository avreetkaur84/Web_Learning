import {useState} from "react"

export default function Counter() {
    let [count, setCount] = useState(0);

    // Without callbacks, when new value does not depend on old value.
    // function incCount() {
    //     setCount(count+1);
    // }

    // with callback, new value depends on old value.
    let incCount = () => {
        // Callback 1
        setCount((currCount) => {
            return currCount + 1;
        });
        //Callback 2
        setCount((currCount) => {
            return currCount + 1;
        });
    }

    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}