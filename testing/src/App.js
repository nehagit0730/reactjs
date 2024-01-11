import React,{ useState } from "react"; // use state
//import Profile from "./Profile";
//function component and class component
// import logo from "./logo.svg";
//import "./App.css";
// import CompoOne from "./FirstComponent";
// import FirstClassComponent from "./FirstClassComponent";
// import Btn from "./Btn";
// import NewProp from "./UsingProps";
// import ClassComponentWithProps from "./UsingProps";
 import ComponentDidMount from "./ComponentDidMount";

/*
function App() {
  return (
    <div className="App">
     <CompoOne />
    </div>
  );
}
*/

//export default App;

//export default FirstClassComponent;

/*

*/

// using props with a class component
/*
function App() {
  return (
    <div>

      <h1>Class Component:</h1>
      <ClassComponentWithProps name="Neha" email="neha@example.com" />
      
    </div>
  );
}

export default App;
*/

//GET DATA FROM INPUT
/*
function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function GetData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}

      <input type="text" onChange={GetData} />
      <button onClick={()=>setPrint(true)}>print data</button>
    </div>
  );
}

export default App;
*/

//hide show on click

// 
/*
const App = () => {
  const [name, setName] = useState(""); 
  const [interest, setInterest] = useState(""); 
  const [tnc, setTnc] = useState(false); 

  function getFormData(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Interest:", interest);
    console.log("Terms and Conditions Accepted:", tnc);
  }

  return (
    <div className="App">
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /> <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> Accept Terms and <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
*/


function App() {
  const [data, setData] = useState(true);

  function dalMakni() {
    console.log("Hello From dala Makni");
  }

  return (
    <div>
      {data ? (
        <div>
          {/* <ComponentDidMount car="audi" emps={{ name: "Puneet", age: "30" }}></ComponentDidMount> */}
          {/* Uncomment and provide ComponentDidMount code */}
        </div>
      ) : (
        <div>The component was unmounted</div>
      )}

      <button onClick={() => setData(!data)}>Click me to Toggle Render</button>
    </div>
  );
}

export default App;