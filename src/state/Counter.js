import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = { 
            count: 0
        }
    }

    static defaultProps = {
        step: 1
    }

    handleButtonClicked = () => {
        const add = this.props.step
        this.setState({
            count: this.state.count + add
        })
    }

    render() { 
        return (
            <div>
                <p> The current count: {this.state.count} </p>
                <button
                    onClick = {this.handleButtonClicked}
                > 
                    Add {this.props.step}
                </button>
            </div>
        )
    }
}
 
export default Counter;