import React, { Component } from 'react'
import Child from './Child'
import LangControls from './LangControls'

class App extends Component {
    state = {  }
    render() { 
        return (  
            <div className = 'AppLang'>
                <LangControls/>
                <Child/>
            </div>
        )
    }
}
 
export default App