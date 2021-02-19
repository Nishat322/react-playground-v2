import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import Bomb from './Bomb'
import RouletteGun from './RouletteGun'
import Accordion from './Accordion'

const sectionsProps = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]
  
class App extends Component {
    state = {  }
    render() { 
        return (  
            <div className = 'App'>
                <HelloWorld/>
                <Bomb/>
                <RouletteGun bulletInChamber = {5}/>
                <Accordion sections = {sectionsProps}/>
            </div>
        )
    }
}
 
export default App;