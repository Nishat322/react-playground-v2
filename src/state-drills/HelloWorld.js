import React, { Component } from 'react'

class HelloWorld extends Component {
    state = {  
        who: 'world!'
    }

    handleButtonClicked(sent){
        this.setState({
            who: sent
        })
    }

    render() { 
        return (  
            <div className = 'Hello World'>
                <p> Hello, {this.state.who}</p>
                <button
                    onClick = {() => this.handleButtonClicked('world!')}
                >
                    world!
                </button>
                <button
                    onClick = {() => this.handleButtonClicked('friend!')}
                >
                    friend!
                </button>
                <button
                    onClick = {() => this.handleButtonClicked('React!')}
                >
                    React!
                </button>
            </div>
        )
    }
}
 
export default HelloWorld;