import React,{useState} from "react";

function Man() {
    const [count, setCount] = useState(0);
    return( 
        <div>
    <h2>Pandav</h2>
    <p>count = {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
}
export default Man;