import React from 'react'
import GreatGrandChild from './GreatGrandChild'
import LanguageContext from './LanguageContext'

export default function GrandChild(){
    return(
        <div className = 'GrandChild'>
            <GreatGrandChild/>
        </div>
    )
}