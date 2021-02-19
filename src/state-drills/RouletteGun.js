import React, { Component } from 'react'

class RouletteGun extends Component {

    state = {
        chamber: null,
        spinningTheChamber : false
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    handleButtonClicked = () => {
        this.setState({
            spinningTheChamber : true
        })

        this.timeout = setTimeout(() => {
            const randomNumber = Math.ceil(Math.random() * 8)
            this.setState({
                spinningTheChamber: false,
                chamber: randomNumber
            })
        }, 3000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    renderDisplay(){
        if(this.state.spinningTheChamber === true){
            return 'spinning the chamber and pulling the trigger!'
        } 
        else if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!'
        }
        else {
            return 'You\'re safe'
        }
    }
    render() { 
        return (  
           <div className = 'RouletteGun'>
               <button onClick = {this.handleButtonClicked}>
                   Pull The Trigger
               </button>
               <p>{this.renderDisplay()}</p>
           </div>
        )
    }
}
 
export default RouletteGun