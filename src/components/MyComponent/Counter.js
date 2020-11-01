import React from 'react';

class Counter extends React.Component{
    state = {
        counter: 0,
    }

    increment = () =>{
        this.setState(prevState =>({
            counter: prevState.counter +1
        }))
    }

    decrement = () =>{
        this.setState(prevState =>({
            counter: prevState.counter -1
        }
        ))
    }
    reset = () =>{
        this.setState(prevState=>({
            counter: prevState = 0
        }))
    }

    render(){
        return(
            <>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick ={this.reset}>Reset</button>
            <p>{this.state.counter}</p>
            </>
        )
    }
}

export default Counter;