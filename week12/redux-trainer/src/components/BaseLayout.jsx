import React from 'react'
import Nav from './Nav'

export default function BaseLayout(props) {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}
