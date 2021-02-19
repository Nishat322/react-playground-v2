import React from 'react'

import './Split.css'

function Spilt(props){
    const combinedNameClass = `Split ${props.className}`
    const newStyles = {flex: props.flexBasis}
    return (
        <div 
            className = {combinedNameClass}
            style = {newStyles} 
        > {/*In-line css*/}
            {props.children}
        </div>
    )
}

export default Spilt