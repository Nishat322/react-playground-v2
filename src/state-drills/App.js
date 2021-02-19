import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import Bomb from './Bomb'

class App extends Component {
    state = {  }
    render() { 
        return (  
            <div className = 'App'>
                <HelloWorld/>
                <Bomb/>
            </div>
        )
    }
}
 
export default App;