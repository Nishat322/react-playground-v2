import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import Bomb from './Bomb'
import RouletteGun from './RouletteGun'

class App extends Component {
    state = {  }
    render() { 
        return (  
            <div className = 'App'>
                <HelloWorld/>
                <Bomb/>
                <RouletteGun/>
            </div>
        )
    }
}
 
export default App;