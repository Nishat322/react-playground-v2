import React, { Component } from 'react'
import './Demonym.css'

class Demonym extends Component {
    render() { 
        return (  
            <div className = 'Demonym'>
                A {this.props.name} comes from {this.props.country}
            </div>
        )
    }
}
 
export default Demonym;