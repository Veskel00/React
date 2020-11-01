import React from 'react';

const data = new Date();

class TestComponent extends React.Component{
    state ={
        date: data,
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }
}

export default TestComponent;

