import React, { Component } from 'react'

class Tabs extends Component {
    static defaultProps = {
        tabs: []
    }

    state = {
        currentTabIndex: 0
    }

    handleButtonClicked = (index) => {
        this.setState({
            currentTabIndex: index
        })
    }

    renderButton(){
        return this.props.tabs.map((tab, index) => (
            <button 
                key = {index}
                onClick = {() => this.handleButtonClicked(index)}
            >
                {tab.name}
            </button>
        ))
    }

    renderContent(){
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className = 'content'>
                {currentTab.content}
            </div>
        )
    }

    render() { 
        return (  
            <div className = 'Tabs'>
                {this.renderButton()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}
 
export default Tabs