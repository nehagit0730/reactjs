import {useState} from 'react'   // use state
import {Component} from 'react';
/*// simple class
class FirstClassComponent extends Component
{
    render()
    {
        return(
            <div>
                <h1>First Class Component</h1>
            </div>
        )
    }
}
*/
//use class with state example
class FirstClassComponent extends Component
{
    constructor(){
        super();
        this.state = {
            data: "Neha Abhishek"
        }
    }
    showNewData(){
        this.setState({
            data: "Son:Agastya"
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.showNewData()}>Click this</button>
            </div>
        )
    }
}


export default FirstClassComponent;
















