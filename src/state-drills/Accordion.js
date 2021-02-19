import React, { Component } from 'react';

class Accordion extends Component {
    static defaultProps = {
        sections: []
    }

    constructor(props){
        super(props)
        this.state = {
            currentSectionIndex: ''
        }
    }

    handleButtonClicked = (index) => {
        this.setState({
            currentSectionIndex: index
        })
    }
    
    renderButton(){
        return this.props.sections.map((sections, index) => (
            <li key = {index}>
                <button 
                    key ={index}
                    onClick = {() => this.handleButtonClicked(index)}
                >
                    {sections.title}
                </button> 
                {index === this.state.currentSectionIndex ?this.renderContent(): ''}
            </li> 
        ))
    }

    renderContent(){
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
            <div className = 'content'>
                {currentSection.content}
            </div>
        )
    }
    render() { 
        return (
            <div className = 'Accordion'>
                <ul>
                    {this.renderButton()}
                </ul>
            </div>
        )
    }
}
 
export default Accordion;