import {useState} from 'react'   // use state
function Btn () {
    const [data, setData] = useState("Neha");
    function clicks() {
        setData("Agastya");
        alert(data);
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={clicks}>Click Me</button>
        </div>
    )
}

export default Btn;