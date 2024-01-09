import {useState} from 'react'   // use state
//function component and class component
import logo from './logo.svg';
import './App.css';
import CompoOne from "./FirstComponent";
import FirstClassComponent from "./FirstClassComponent";
import Btn from "./Btn"
import NewProp from "./UsingProps"



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

function App() {
  return (
    <div className="App">
<NewProp name ={"Neha"} email={"Neha@gmail.com"} />
<NewProp name ={"Puneet"} email={"puneet@gmail.com"} />
<NewProp name ={"Sangeet"} email={"sangy@gmail.com"} />
     <Btn />
    </div>
  );
}

//export default Btn;
export default App;

